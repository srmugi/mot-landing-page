const aws = require("aws-sdk");
const ses = new aws.SES();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      const createdAt = record.dynamodb.NewImage.createdAt.S;
      const companyName = record.dynamodb.NewImage.companyName.S;
      const name = record.dynamodb.NewImage.name.S;
      const email = record.dynamodb.NewImage.email.S;
      const phoneNumber = record.dynamodb.NewImage.phoneNumber.S;
      const title = record.dynamodb.NewImage.title.S;
      const content = record.dynamodb.NewImage.content.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Body: {
              Html: {
                Data: `
                  <h3>${createdAt}</h4>
                  <ul>
                    <li>会社名:${companyName}</li>
                    <li>お名前:${name}</li>
                    <li>メールアドレス:${email}</li>
                    <li>電話番号:${phoneNumber}</li>
                    <li>タイトル:${title}</li>
                    <li>お問い合わせ内容:${content}</li>
                  </ul>
                `,
              },
            },
            Subject: {
              Data: `お問い合わせ-${companyName}-${createdAt}`,
            },
          },
        })
        .promise();
    }
  }
  return { status: "DONE" };
};
