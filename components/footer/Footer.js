import Link from "next/link";
import navs from "../../utils/_navs";
import styles from "../../styles/modules/NavHover.module.css";

const companyInfo = [
  { label: "会社名", value: "mot.inc" },
  { label: "代表取締役", value: "堤 新一" },
  { label: "資本金", value: "990万円" },
  { label: "従業員数", value: "98名" },
  {
    label: "住所",
    value: (
      <>
        〒160-0023
        <br />
        東京都新宿区西新宿３丁目３−１５
        <br />
        ワシントンホテルビルAnnex ビジネス棟3F
      </>
    ),
  },
  {
    label: "主な取引先",
    value: (
      <ul>
        {[
          "株式会社野村総合研究所",
          "日鉄ソリューションズ株式会社",
          "株式会社システナ",
          "株式会社FLUX",
          "株式会社NTTデータ",
          "株式会社NTTデータ先端技術",
          "NTTドコモビジネス株式会社",
          "NTT情報ネットワーク総合研究所",
          "株式会社電縁",
          "株式会社ユカリア",
          "TDCソフト株式会社",
        ].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    ),
  },
];

const motPoints = [
  "技術選定・アーキテクチャ設計",
  "PoCから本番運用までの実装・推進",
  "MLOpsを含む継続的な改善体制の構築",
  "組織・人材・プロセスへの技術の定着",
];

export default function Footer() {
  const navItems = navs.map((item) => (
    <div key={item.path} className="mb-2">
      <span className={styles["link-underline"]}>
        <Link href={item.path}>{item.title}</Link>
      </span>
    </div>
  ));

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-secondary to-white py-8 text-white">
        <div className="container mx-auto grid grid-cols-2 px-4">
          <div className="col-span-2 md:col-span-1 m-4">
            <h2 className="mb-4 pb-2 text-base font-bold">会社概要</h2>

            {/* 会社概要：ラベル / ： / 値 の3列 */}
            <dl className="grid grid-cols-[max-content_auto_1fr] gap-x-2 gap-y-1 text-sm leading-relaxed">
              {companyInfo.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt>{label}</dt>
                  <dd>：</dd>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {/* MOTの説明 */}
            <div className="mt-10 space-y-4 text-[0.7rem] leading-relaxed">
              <p>
                motにおける技術経営（Management of Technology）とは
                <br />
                motの技術経営とは、単なる技術開発や導入に留まらず、テクノロジーを起点に事業価値を最大化するための意思決定・実行プロセスそのものを指します。
              </p>
              <p>
                具体的には、AI・データ・ソフトウェアといった先端技術を活用し、
                <br />
                「どの技術を、どのタイミングで、どのように事業へ組み込み、競争優位へと転換するか」
                <br />
                を設計・推進することに重きを置いています。
              </p>
              <div>
                <p>また、motでは以下を一気通貫で担う点に特徴があります。</p>
                <ul>
                  {motPoints.map((p) => (
                    <li key={p}>・{p}</li>
                  ))}
                </ul>
              </div>
              <p>
                これにより、単発の導入支援ではなく、クライアントの事業成長に直結する「持続的な価値創出」を実現します。
              </p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 m-4 text-sm">{navItems}</div>
        </div>
      </div>
    </div>
  );
}
