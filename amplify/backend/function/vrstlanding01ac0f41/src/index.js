const aws = require("aws-sdk");
const ses = new aws.SES();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      const createdAt = record.dynamodb.NewImage.createdAt.S;
      const employmentType = record.dynamodb.NewImage.employmentType.S;
      const desiredOccupation = record.dynamodb.NewImage.desiredOccupation.S;
      const location = record.dynamodb.NewImage.location.S;
      const fullName = record.dynamodb.NewImage.fullName.S;
      const furigana = record.dynamodb.NewImage.furigana.S;
      const postCode = record.dynamodb.NewImage.postCode.S;
      const address = record.dynamodb.NewImage.address.S;
      const phoneNumber = record.dynamodb.NewImage.phoneNumber.S;
      const birthDate = record.dynamodb.NewImage.birthDate.S;
      const gender = record.dynamodb.NewImage.gender.S;
      const email = record.dynamodb.NewImage.email.S;
      const education = record.dynamodb.NewImage.education.S;
      const qualification = record.dynamodb.NewImage.qualification.S;

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
                    <li>形態:${employmentType}</li>
                    <li>希望職種:${desiredOccupation}</li>
                    <li>形態:${location}</li>
                    <li>氏名:${fullName}</li>
                    <li>ふりがな:${furigana}</li>
                    <li>郵便番号:${postCode}</li>
                    <li>住所:${address}</li>
                    <li>電話番号:${phoneNumber}</li>
                    <li>生年月日:${birthDate}</li>
                    <li>形態:${gender}</li>
                    <li>E-MAIL:${email}</li>
                    <li>最終学歴:${education}</li>
                    <li>保有資格:${qualification}</li>
                  </ul>
                `,
              },
            },
            Subject: {
              Data: `エントリー-${fullName}-${createdAt}`,
            },
          },
        })
        .promise();
    }
  }
  return { status: "DONE" };
};
