/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  amplifyDisabledFormMessage,
  amplifyDisabledMessage,
  emptyContent,
} from "../src/amplifyDisabled";

import { Layout } from "../components/layout";
import { SubmitButton } from "../components/button";
import {
  RadioInput,
  TextInput,
  DateInput,
  AreaInput,
} from "../components/input";

export async function getServerSideProps() {
  return {
    props: {
      content: null,
    },
  };
}

export default function Entry({ content }) {
  const safeContent = content ?? emptyContent;

  const [employmentType, setEmploymentType] = useState("");
  const [desiredOccupation, setDesiredOccupation] = useState("");
  const [location, setLocation] = useState("");
  const [fullName, setFullName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [qualification, setQualification] = useState("");

  const [notValidated, setNotValidated] = useState([]);
  const loading = false;

  const validate = () => {
    let tmp = [];

    if (!employmentType) tmp.push("employmentType");
    if (!desiredOccupation) tmp.push("desiredOccupation");
    if (!location) tmp.push("location");
    if (!fullName) tmp.push("fullName");
    if (!furigana) tmp.push("furigana");
    if (!postCode) tmp.push("postCode");
    if (!address) tmp.push("address");
    if (!phoneNumber) tmp.push("phoneNumber");
    if (!birthDate) tmp.push("birthDate");
    if (!gender) tmp.push("gender");
    if (!email) tmp.push("email");
    if (!education) tmp.push("education");
    if (!qualification) tmp.push("qualification");

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
          <center className="mb-4 px-28">
            <img src="/img/entry/title.png" alt="title" width="350px" />
          </center>
          <center className="px-32">
            <img src="/img/entry/subtitle.png" alt="subtitle" width="220px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-48">
        <div className="text-2xl mb-10">
          エントリー
          <br />
          <br />
          東京支社
        </div>
        <form>
          <RadioInput
            get={employmentType}
            set={setEmploymentType}
            label="形態"
            options={["新卒採用", "キャリア採用", "パート・アルバイト"]}
            err={notValidated.includes("employmentType")}
          />
          <TextInput
            get={desiredOccupation}
            set={setDesiredOccupation}
            label="希望職種"
            placeholder={
              notValidated.includes("desiredOccupation")
                ? "希望職種をご記入ください"
                : "エンジニア"
            }
            err={notValidated.includes("desiredOccupation")}
          />
          <RadioInput
            get={location}
            set={setLocation}
            label="形態"
            options={["名古屋", "東京", "横浜"]}
            err={notValidated.includes("location")}
          />
          <TextInput
            get={fullName}
            set={setFullName}
            label="氏名"
            placeholder={
              notValidated.includes("fullName")
                ? "名前をご記入ください"
                : "例）名字　名前"
            }
            err={notValidated.includes("fullName")}
          />
          <TextInput
            get={furigana}
            set={setFurigana}
            label="ふりがな"
            placeholder={
              notValidated.includes("furigana")
                ? "ふりがなをご記入ください"
                : "例）なまえ"
            }
            err={notValidated.includes("furigana")}
          />
          <TextInput
            get={postCode}
            set={setPostCode}
            label="郵便番号"
            placeholder={
              notValidated.includes("postCode")
                ? "電話番号をご記入ください"
                : "例）4506421"
            }
            err={notValidated.includes("postCode")}
          />
          <TextInput
            get={address}
            set={setAddress}
            label="住所"
            placeholder="例）4506421"
            err={notValidated.includes("address")}
          />
          <TextInput
            get={phoneNumber}
            set={setPhoneNumber}
            label="電話番号"
            placeholder="例）4506421"
            err={notValidated.includes("phoneNumber")}
          />
          <DateInput
            set={setBirthDate}
            label="生年月日"
            err={notValidated.includes("birthDate")}
          />
          <RadioInput
            get={gender}
            set={setGender}
            label="形態"
            options={["男性", "女性"]}
            err={notValidated.includes("gender")}
          />
          <TextInput
            get={email}
            set={setEmail}
            label="E-MAIL"
            placeholder={
              notValidated.includes("email")
                ? "メールアドレスを記入してください"
                : "例）mac@example.com"
            }
            err={notValidated.includes("email")}
          />
          <TextInput
            get={education}
            set={setEducation}
            label="最終学歴"
            placeholder={
              notValidated.includes("education")
                ? "最終学歴を記入してください"
                : "例）〇〇大学　〇〇学科卒業"
            }
            err={notValidated.includes("education")}
          />
          <AreaInput
            get={qualification}
            set={setQualification}
            label="保有資格"
            placeholder={
              notValidated.includes("qualification")
                ? "所有資格を記入してください"
                : "例）資格名が入ります。"
            }
            err={notValidated.includes("qualification")}
          />
        </form>
        <div className="text-2xl mt-14 mb-10">
          <div
            dangerouslySetInnerHTML={{
              __html:
                safeContent.title.replaceAll("\n", "<br />") ||
                amplifyDisabledMessage,
            }}
          />
        </div>
        <div className="bg-white border border-neutral-500 rounded p-3 h-40 overflow-y-auto">
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description.replaceAll("\n", "<br />"),
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
