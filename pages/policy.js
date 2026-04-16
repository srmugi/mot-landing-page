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

export default function Policy({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/policy/title.png" alt="title" width="390px" />
          </center>
          <center className="px-30">
            <img src="/img/policy/subtitle.png" alt="subtitle" width="240px" />
          </center>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-48">
        <div className="text-sm space-y-10">
          <div>
            <p>
              【株式会社MOT】（以下「当社」といいます。）は、当社が提供するサービス（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第1条（個人情報）</div>
            <p>
              「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できる情報、および他の情報と照合することにより個人を識別できる情報をいいます。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第2条（個人情報の収集方法）</div>
            <p className="mb-3">
              当社は、以下の方法により個人情報を取得することがあります。
            </p>
            <ul className="space-y-2">
              <li>・ユーザーが本サービスを利用する際の入力情報</li>
              <li>・お問い合わせフォームや資料請求等を通じた取得</li>
              <li>・採用応募時の提出情報</li>
              <li>・業務委託・SES契約に関連して取得する情報</li>
              <li>・Cookieやアクセスログ等の自動取得情報</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">第3条（個人情報の利用目的）</div>
            <p className="mb-3">
              当社は、取得した個人情報を以下の目的で利用します。
            </p>
            <ul className="space-y-2">
              <li>・本サービスの提供・運営のため</li>
              <li>・ユーザーからのお問い合わせ対応</li>
              <li>・サービス改善および新サービスの開発</li>
              <li>
                ・AIモデルの開発・精度向上（※個人が特定されない形での利用を含む）
              </li>
              <li>・契約の履行および業務管理（SaaSおよびSES事業を含む）</li>
              <li>・採用活動および人材管理</li>
              <li>・重要なお知らせや規約変更等の通知</li>
              <li>・不正利用の防止およびセキュリティ確保</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">第4条（利用目的の変更）</div>
            <p>
              当社は、利用目的が変更前と合理的に関連性を有すると認められる場合に限り、個人情報の利用目的を変更することがあります。変更後の目的については、本ポリシーにて公表します。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第5条（個人情報の第三者提供）</div>
            <p className="mb-3">
              当社は、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>
            <ul className="space-y-2">
              <li>・法令に基づく場合</li>
              <li>・人の生命、身体または財産の保護に必要な場合</li>
              <li>・公衆衛生の向上または児童の健全育成のために必要な場合</li>
              <li>・国の機関等への協力が必要な場合</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">第6条（個人情報の委託）</div>
            <p>
              当社は、利用目的の達成に必要な範囲において、個人情報の取扱いを外部に委託することがあります。その場合、適切な委託先の監督を行います。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第7条（安全管理措置）</div>
            <p className="mb-3">
              当社は、個人情報の漏えい、滅失または毀損の防止その他の安全管理のために、以下の措置を講じます。
            </p>
            <ul className="space-y-2">
              <li>・アクセス制御および権限管理</li>
              <li>・通信の暗号化</li>
              <li>・ログ監視および不正アクセス対策</li>
              <li>・従業員への教育および監督</li>
              <li>・委託先の適切な管理</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-3">第8条（Cookie等の利用）</div>
            <p>
              当社は、サービスの利便性向上および利用状況の分析のため、Cookie等の技術を使用することがあります。ユーザーはブラウザ設定によりCookieの使用を制限することができます。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第9条（開示・訂正・削除等）</div>
            <p>
              ユーザーは、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止を求めることができます。これらの請求については、下記窓口までご連絡ください。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">
              第10条（プライバシーポリシーの変更）
            </div>
            <p>
              当社は、本ポリシーの内容を適宜見直し、改善することがあります。変更後の内容は、本サービス上に掲載した時点で効力を生じるものとします。
            </p>
          </div>

          <div>
            <div className="font-bold mb-3">第11条（お問い合わせ窓口）</div>
            <p className="mb-3">
              本ポリシーに関するお問い合わせは、下記までお願いいたします。
            </p>
            <div className="space-y-2">
              <div>会社名： 【mot.inc】</div>
              <div>住所： 【東京都新宿区西新宿３丁目３−１５】</div>
              <div>代表者： 【𫝆村 峻輔】</div>
              <div>メールアドレス： 【メールアドレス】</div>
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
