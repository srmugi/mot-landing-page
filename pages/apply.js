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

export default function Apply({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-10">
            <img src="/img/apply/title.png" alt="title" width="550px" />
          </center>
          <center className="px-30">
            <img src="/img/apply/subtitle.png" alt="subtitle" width="400px" />
          </center>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-48">
        <div className="text-xl mb-5">業務内容</div>
        <div className="text-sm">
          日本を代表するエンタープライズ企業を中心としたクライアントに対し、本質的な価値創出に重きを置いたプロジェクトの推進・実行を担当いただきます。機械学習モデルの実装から推論最適化、MLOpsの構築、実運用における保守・改善までを主導いただくスペシャリストとして参画いただくポジションとなります。
          <ul className="mt-5">
            <li>・顧客のビジネス課題に基づいたAIシステムの設計・開発・運用</li>
            <li>
              ・機械学習・深層学習を用いたAIモデル実装、および推論パイプラインの構築・最適化
            </li>
            <li>
              ・MLOps基盤の構築、およびモデルのデプロイ・監視・継続的な精度改善フローの運用
            </li>
            <li>
              ・生成AI（LLM等）を含む先端技術の調査・検証、および実務プロジェクトへの実装
            </li>
            <li>
              ・データサイエンティストと連携したPoCの推進、技術選定・ベストプラクティスの確立
            </li>
          </ul>
        </div>

        <div className="text-xl mt-20 mb-5">AI事業に携わる魅力</div>
        <div className="text-sm">
          <ul>
            <li>
              ・自身がSaaS&SES企業であり、事業会社として自社での実践に基づく型作りに強みがある企業のため、絵に描いた餅で終わらない実践的なアプローチをとることができます。
            </li>
            <li>
              ・コンサルタントとしてクライアントに向き合いつつ、事業開発の主体者としての側面も持つことができるため、その両軸での成長機会を得ることができます。
            </li>
            <li>
              ・純粋なコンサルファームと異なり、コンサルティング / 採用 /
              プロダクト提供
              ができるMOTだからこそ、クライアント企業に対して本質的な課題解決が実現できます。
            </li>
            <li>
              ・Claude等の生成AIツールが社内環境に広く導入されており、開発・分析・ドキュメント作成などの業務においてAIを前提とした働き方が全社的に浸透しています。AIを活用しながら効率的に開発を進められる環境が整っています。
            </li>
          </ul>
        </div>

        <div className="text-xl mt-20 mb-5">ポジションの魅力</div>
        <div className="text-sm">
          <ul>
            <li>
              ・最新のテクノロジーを用いて、PoC→MVP→本番運用まで一連のプロセスを推進することができます。
            </li>
            <li>
              ・日本を代表するエンタープライズ企業に事業推進パートナーとして関わることができ、クライアントへの貢献度が高いです。
            </li>
            <li>
              ・マネジメント、スペシャリストそれぞれのキャリアパスがあることに加え、部署内での異動の機会も豊富です。
            </li>
          </ul>
        </div>

        <div className="text-xl mt-20 mb-5">募集要項</div>
        <div className="text-sm space-y-12">
          <div>
            <div className="font-bold mb-3">給与</div>
            <div>380-1200万円</div>
            <ul className="mt-3">
              <li>※ご経験・スキルを考慮して決定いたします。</li>
              <li>※上記の固定年収とは別に成果ベースでのインセンティブ有</li>
              <li>
                ※上記金額を想定年俸金額として、12分割した金額が月給となります。（月給には定額時間外手当12時間を含み、月12時間超過分は別途支給します）
              </li>
              <li>
                ※半年毎の人事評価制度を導入しており、評価に応じて年俸金額や賞与を見直します。
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">勤務地</div>
            <div className="mb-4">
              <div className="font-bold">本社住所</div>
              <div>〒160-0023</div>
              <div>東京都新宿区西新宿3-3-15 ワシントンホテルアネックス3F-C</div>
            </div>

            <div className="mb-4">
              <div className="font-bold">【アクセス】</div>
              <ul className="mt-2">
                <li>・地下鉄をご利用の方</li>
                <li>・都営大江戸線 「都庁前駅」出口より5分</li>
                <li>・東京メトロ丸の内線 「新宿駅」より地下通路から10分</li>
                <li>・JR「新宿駅」西口より徒歩約8分</li>
                <li>・京王線・小田急線 「新宿駅」西口より徒歩約10分</li>
              </ul>
            </div>

            <ul>
              <li>※屋内の受動喫煙対策：屋内原則禁煙（喫煙専用室あり）</li>
              <li>（雇入れ直後）本社、本人の自宅、その他会社が指定する場所</li>
              <li>
                （変更の範囲）本社および全ての支社、本人の自宅、その他会社が指定する場所
              </li>
              <li>※オフィス / 自宅でのハイブリッド勤務を推奨しています。</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">雇用形態</div>
            <div>正社員</div>
          </div>

          <div>
            <div className="font-bold mb-3">勤務体系</div>
            <ul>
              <li>・フレックスタイム制（標準労働時間8時間 / 休憩60分）</li>
              <li>《コアタイム》11：00～15：00</li>
              <li>所定時間外労働：有</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">試用期間</div>
            <div>あり：3ヶ月（条件等は変わりません）</div>
          </div>

          <div>
            <div className="font-bold mb-3">福利厚生</div>

            <div className="mb-6">
              <div className="font-bold mb-2">休日休暇</div>
              <ul>
                <li>・完全週休2日制（土曜・日曜）</li>
                <li>・祝日</li>
                <li>・夏期休暇（3日間）</li>
                <li>・年末年始休暇（12/27～1/4）</li>
                <li>・年次有給休暇（初年度10日間）</li>
                <li>・慶弔休暇</li>
                <li>・産前産後休暇</li>
                <li>・育児休暇</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">待遇 / 福利厚生</div>
              <ul>
                <li>・給与改定（年2回）</li>
                <li>・交通費一律支給</li>
                <li>
                  ・各種社会保険完備（健康保険 / 厚生年金保険 / 労災保険 /
                  雇用保険）
                </li>
                <li>・リモートワーク</li>
                <li>・スキルアップ手当</li>
                <li>・ランチ手当</li>
                <li>・慶弔金手当</li>
                <li>・リファラル会食手当</li>
              </ul>
            </div>
          </div>

          <div>
            <ul>
              <li>
                ・ご自身の専門性やスキルに応じて自社の事業開発に関わっていただける可能性があります。
              </li>
            </ul>
          </div>
        </div>

        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
