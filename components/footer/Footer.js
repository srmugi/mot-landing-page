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
        <div className="container mx-auto grid grid-cols-3 px-4">
          <div className="col-span-3 md:col-span-1 m-4">
            <div className="mb-8 text-lg font-bold">株式会社MOT</div>
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  content.address.replaceAll("\n", "<br />") ||
                  amplifyDisabledMessage,
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2 m-4 text-sm">{navItems}</div>
        </div>
      </div>
    </div>
  );
}
