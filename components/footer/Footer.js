import Link from "next/link";
import {
  amplifyDisabledMessage,
  emptyContent,
} from "../../src/amplifyDisabled";

import navs from "../../utils/_navs";

import styles from "../../styles/modules/NavHover.module.css";

export default function Footer() {
  const content = emptyContent;

  const navItems = navs.map((item, idx) => (
    // eslint-disable-next-line react/jsx-key
    <div key={idx} className="mb-2">
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
            <div className="grid grid-cols-[max-content_auto_1fr] gap-x-1 text-sm leading-relaxed">
              <div className="col-span-3 mb-4 text-base font-bold pb-2">
                会社概要
              </div>
              <div>会社名</div>
              <div>：</div>
              <div>mot.inc</div>
              <div>代表取締役</div>
              <div>：</div>
              <div>𫝆村 峻輔</div>
              <div>資本金</div>
              <div>：</div>
              <div>990万円</div>
              <div>住所</div>
              <div>：</div>
              <div>
                〒160-0030
                <br />
                東京都新宿区西新宿３丁目３−１５
                <br />
                ワシントンホテルビルAnex ビジネス棟3F
              </div>
              <div>主な取引先</div>
              <div>：</div>
              <div>
                <ul>
                  <li>株式会社野村総合研究所</li>
                  <li>日鉄ソリューションズ株式会社</li>
                  <li>株式会社システナ</li>
                  <li>株式会社FLUX</li>
                  <li>株式会社NTTデータ</li>
                  <li>株式会社NTTデータ先端技術</li>
                  <li>NTTドコモビジネス株式会社</li>
                  <li>NTT情報ネットワーク総合研究所</li>
                </ul>
              </div>
              <div className="col-span-3 mt-10 text-[0.7rem]">
                motにおける技術経営（Management of Technology）とは <br />
                motの技術経営とは、単なる技術開発や導入に留まらず、テクノロジーを起点に事業価値を最大化するための意思決定・実行プロセスそのものを指します。
              </div>
              <div className="col-span-3 mt-4 text-[0.7rem]">
                具体的には、AI・データ・ソフトウェアといった先端技術を活用し、
                <br />
                「どの技術を、どのタイミングで、どのように事業へ組み込み、競争優位へと転換するか」
                <br />
                を設計・推進することに重きを置いています。
              </div>
              <div className="col-span-3 mt-4 text-[0.7rem]">
                また、motでは以下を一気通貫で担う点に特徴があります。
                <ul>
                  <li>・技術選定・アーキテクチャ設計</li>
                  <li>・PoCから本番運用までの実装・推</li>
                  <li>・MLOpsを含む継続的な改善体制の構築</li>
                  <li>・組織・人材・プロセスへの技術の定着</li>
                </ul>
              </div>
              <div className="col-span-3 mt-4 text-[0.7rem]">
                これにより、単発の導入支援ではなく、クライアントの事業成長に直結する「持続的な価値創出」を実現します。
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 m-4 text-sm">{navItems}</div>
        </div>
      </div>
    </div>
  );
}
