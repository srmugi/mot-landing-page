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

export default function About({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/about/title.png" alt="title" width="400px" />
          </center>
          <center className="px-28">
            <img src="/img/about/subtitle.png" alt="subtitle" width="170px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 items-end my-40 gap-x-10 gap-y-10 md:gap-y-40">
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/01.png" alt="about01" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div>SES Business</div>
            </div>
            <div className="text-sm">
              <div>
                Javaエンジニア40名、Azureエンジニア10名を擁し、要件定義から設計・開発まで対応可能な体制でSES事業を展開しています。
                <br />
                要件定義18名、基本設計18名、詳細設計以降14名と、上流から下流まで一貫した支援が可能です。
                <br />
                また、サービスは開発して終わりではありません。
                <br />
                その後の運営や集客まで見据えることで、初めてビジネスとしての成功が実現します。
                <br />
                そのため当社は、開発に加えてマーケティングまで一体で支援します。
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/about/02.png" alt="about02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2 md:col-start-1">
            <div className="text-2xl mb-3">
              <div>AI事業</div>
            </div>
            <div className="text-sm">
              <div>
                AIとエキスパートとの融合で、経営課題を根本から解決する。
                <br />
                私たちは、AI時代における真のパートナーとして、戦略立案から実行、改善、そして人材の採用・育成までを一貫して支援します。
                <br />
                最先端AIと高度な専門性を掛け合わせることで、複雑化する経営課題に対し、本質的かつ持続的な価値を提供。
                <br />
                単なる「AI活用企業」ではなく、AI時代のビジネスそのものを創造する、AI先進テック企業です。
                <br />
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/about/02.png" alt="about02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/03.png" alt="about03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div>MOT Strategy</div>
            </div>
            <div className="text-sm">
              <div>
                エンタープライズ企業のAI戦略を起点に、事業変革を加速させるAIコンサルティングサービスです。
                <br />
                戦略立案から実行・改善までを一気通貫で支援し、実行力ある変革を実現します。
                <br />
                AIワークフロー構築プロダクト「MOT
                Flow」を活用することで、AI活用を業務に組み込み、ビジネスKPIの達成まで導きます。
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/about/04.png" alt="about04" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div>MOT AI Agent</div>
            </div>
            <div className="text-sm mb-3">
              <div>
                コンサルタントの能力を最大限に引き出す、AI業務支援プロダクトです。
                <br />
                MOT
                AIAgentに所属するコンサルタントの業務プロセスにおいて、効率化可能な作業をAIが支援。
                <br />
                意思決定の質と支援品質の向上を実現します。
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/about/04.png" alt="about04" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/05.png" alt="about05" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div>E-sports × 社会課題解決事業</div>
            </div>
            <div className="text-sm mb-3">
              <div>
                「熱狂」を「学び」と「社会参画」の力に変える
                <br />
                エンターテインメントの枠を超え、E-sportsが持つ強力なコミュニティ形成力と没入感を活用し、現代の社会課題にアプローチするエデュテイメント（教育×娯楽）事業を展開しています。
                <br />
                <div className="mb-3" />
                引きこもり支援（社会参画へのステップアップ）
                <br />
                E-sportsという共通の言語・目標を通じて、まずはオンラインの安全な環境から他者とのコミュニケーションを再構築します。チームプレイを通じた協調性の育成や、ゲーム内での成功体験による自己肯定感の向上を図り、段階的な社会復帰を支援します。また、当社のIT事業基盤を活かし、将来的なIT人材・エンジニアとしての就労支援やキャリアパス形成まで視野に入れた伴走を行います。
                <br />
                <div className="mb-3" />
                実践型・英語教育
                <br />
                国境を越えて世界中のプレイヤーと繋がるE-sportsの特性を最大限に活かした語学プログラムです。ボイスチャットでの連携や、海外の最新情報の収集など、「ゲームで勝つため・楽しむため」という強力な動機付けを利用することで、机上の「勉強」ではなく、実践的で生きたコミュニケーションとしての英語力を自然に身につけます。
                <br />
                <div className="mb-3" />
                プログラミング教育（次世代IT人材の育成）
                <br />
                「ゲームを遊ぶ側」から「仕組みを理解し、創る側」への視点の転換を促します。ゲームのアルゴリズム理解、データ分析による戦術構築などを通じて、プログラミング的思考（論理的思考力）を楽しく習得します。当社のSES事業やAI事業のノウハウを教育現場に還元することで、未来のデジタル社会を牽引するITエンジニアの原石を育てます。
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 md:hidden">
            <img src="/img/about/06.png" alt="about06" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="text-xl mb-3">
              <div>
                事例：
                <br />
                主な取引先：
              </div>
            </div>
            <div className="text-base mb-3 pl-5">
              <div>
                <ul>
                  <li>株式会社野村総合研究所</li>
                  <li>日鉄ソリューションズ株式会社</li>
                  <li>株式会社システナ</li>
                  <li>株式会社FLUX</li>
                  <li>株式会社NTTデータ</li>
                  <li>株式会社NTTデータ先端技術</li>
                  <li>NTTドコモビジネス株式会社</li>
                  <li>NTT情報ネットワーク総合</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 hidden md:block">
            <img src="/img/about/06.png" alt="about06" width="100%" />
          </div>
        </div>
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
