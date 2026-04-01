/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  amplifyDisabledFormMessage,
  amplifyDisabledMessage,
  emptyContent,
} from "../src/amplifyDisabled";

import { Layout } from "../components/layout";
import { SubmitButton } from "../components/button";
import { TextInput, AreaInput } from "../components/input";

export async function getServerSideProps() {
  return {
    props: {
      policyContent: null,
    },
  };
}

export default function Inquiry({ policyContent }) {
  const safePolicyContent = policyContent ?? emptyContent;

  const [companyName, setCompanyName] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [notValidated, setNotValidated] = useState([]);
  const loading = false;

  const validate = () => {
    let tmp = [];

    if (!companyName) tmp.push("companyName");
    if (!name) tmp.push("name");
    if (!email) tmp.push("email");
    if (!phoneNumber) tmp.push("phoneNumber");
    if (!title) tmp.push("title");
    if (!content) tmp.push("content");

    return tmp;
  };

  const handleSubmit = () => {
    const validationResult = validate();

    if (validationResult.length) {
      setNotValidated(validationResult);
    } else {
      alert(amplifyDisabledFormMessage);
    }
  };

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/inquiry/title.png" alt="title" width="390px" />
          </center>
          <center className="px-40">
            <img src="/img/inquiry/subtitle.png" alt="subtitle" width="170px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-48">
        <div className="text-2xl mb-10">お問い合わせ</div>
        <form>
          <TextInput
            get={companyName}
            set={setCompanyName}
            label="会社名"
            placeholder={
              notValidated.includes("companyName")
                ? "会社名を記入してください"
                : "例）株式会社〇〇"
            }
            err={notValidated.includes("companyName")}
          />
          <TextInput
            get={name}
            set={setName}
            label="お名前"
            placeholder={
              notValidated.includes("name")
                ? "名前を記入してください"
                : "例）名字　名前"
            }
            err={notValidated.includes("name")}
          />
          <TextInput
            get={email}
            set={setEmail}
            label="メールアドレス"
            placeholder={
              notValidated.includes("email")
                ? "メールアドレスを記入してください"
                : "例）xxxxx@co.jp"
            }
            err={notValidated.includes("email")}
          />
          <TextInput
            get={phoneNumber}
            set={setPhoneNumber}
            label="電話番号"
            placeholder={
              notValidated.includes("phoneNumber")
                ? "電話番号を記入してください"
                : "例）000-0000-0000"
            }
            err={notValidated.includes("phoneNumber")}
          />
          <TextInput
            get={title}
            set={setTitle}
            label="タイトル"
            placeholder={
              notValidated.includes("title")
                ? "タイトルを記入してください"
                : "例）業務提携について"
            }
            err={notValidated.includes("title")}
          />
          <AreaInput
            get={content}
            set={setContent}
            label="お問い合わせ内容"
            placeholder={
              notValidated.includes("content")
                ? "お問い合わせ内容を記入してください"
                : "例）内容が入ります。"
            }
            err={notValidated.includes("content")}
          />
        </form>
        <div className="text-2xl mt-14 mb-10">
          <div
            dangerouslySetInnerHTML={{
              __html:
                safePolicyContent.title.replaceAll("\n", "<br />") ||
                amplifyDisabledMessage,
            }}
          />
        </div>
        <div className="bg-white border border-neutral-500 rounded p-3 h-40 overflow-y-auto">
          <div
            dangerouslySetInnerHTML={{
              __html: safePolicyContent.description.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <div className="mt-20 mb-40 flex justify-center">
          <SubmitButton
            text="プライバシーポリシーに同意して送信"
            action={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </Layout>
  );
}
