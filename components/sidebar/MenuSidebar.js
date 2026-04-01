import Link from "next/link";
import { useEffect, useState } from "react";

import navs from "../../utils/_navs";

import styles from "../../styles/modules/NavHover.module.css";

export default function MenuSidebar() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setHeight(height);
  }, []);

  const navItems = navs.map((item, idx) => (
    // eslint-disable-next-line react/jsx-key
    <div key={idx} className="mb-2">
      <span className={styles["link-underline"]}>
        <Link href={item.path}>{item.title}</Link>
      </span>
    </div>
  ));

  return (
    <div>
      <div
        className="bg-black absolute w-screen h-max inset-0 opacity-30"
        style={{ height: height }}
      />
      <div className="bg-white absolute top-0 right-0 z-[1] w-screen md:w-1/3 min-h-screen md:min-h-0 px-5 py-16 text-center">
        {navItems}
      </div>
    </div>
  );
}
