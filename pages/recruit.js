/* eslint-disable @next/next/no-img-element */
import { amplifyDisabledMessage, emptyContent } from "../src/amplifyDisabled";

import { Layout } from "../components/layout";
import { ReadButton } from "../components/button";

export async function getServerSideProps() {
  return {
    props: {
      content: null,
    },
  };
}

export default function Recruit({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/recruit/title.png" alt="title" width="450px" />
          </center>
          <center className="px-28">
            <img src="/img/recruit/subtitle.png" alt="subtitle" width="200px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 my-40 gap-x-10 gap-y-10 md:gap-y-40">
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/01.png" alt="recruit01" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-sm">
              AIに飲み込まれるのではなく「力」に
              <br />
              次世代の事業を「共創」し、社会的問題を解決する。
              <br />
              そして、あなたの一歩が多くを動かす人材へと成長させます。
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/recruit/02.png" alt="recruit02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-sm">
              MOTが目指すのはAI時代の先駆者。
              <br />
              多くの専門的戦略的知見を持った仲間が共創しながら価値提供を追い求める。
              <br />
              ビジネスと共に、常に変化し、成長し続ける高付加価値を提供する組織です。
              <br />
              次世代のビジネスを動かすエキスパートを求めています。
              <br />
              そして、あなたの「大切な人」や「大切なもの」を 守れる力が身につく
              <br />
              また「独立支援制度」もある当社でなら、独立したい人もそうでない人も
              独立できるくらいのスキルが身に付きます。
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/recruit/02.png" alt="recruit02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/03.png" alt="recruit03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-sm">
              目的を持って働く
              <br />
              ポジティブな変化をもたらし、社員、お客様、そして私たちが生活し働くコミュニティのために社会をより良くしていきます
              <br />
              また、生成AIなどの強力なAIツールは、これまでにないチャンスと新たなリスクをもたらします。MOTは、クライアントが正しい認識をもって行動し、AIを設計、導入、活用して価値を生み出し、信頼を築いていけるように支援しています。
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/recruit/04.png" alt="recruit04" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-sm">
              多種多様な才能を発揮できる組織をつくる
              <br />
              社員に愛されるより社員を愛する会社にし
              <br />
              いろいろな人がいろいろな働き方のできる組織にしていく。
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/recruit/04.png" alt="recruit04" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/05.png" alt="recruit05" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-sm">
              最後に、ここまで読んで下さりありがとうございます。
              <br />
              私たちは、技術を使い社会課題「貧困」を解決することをMission-Vision-Valueとして捉えてます。
              <br />
              今、様々な情報、技術が飛び交い、想像もできないスピードで進化しています。
              <br />
              その一つのアプローチとして社会課題を如何に解決するかをテーマに事業を行っております。
              <br />
              もし、弊社の考え方に賛同していただける方がおりましたら、ぜひ応募いただけると幸いです。
              <br />
              皆様と会えることを日々楽しみにしています。
            </div>
          </div>
        </div>
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
