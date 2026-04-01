/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";

import { MenuButton } from "../button";
import { MenuSidebar } from "../sidebar";

export default function Header() {
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-white w-full absolute z-[900]">
      <div className="bg-gradient-to-r from-primary to-white">
        <div className="container mx-auto grid grid-cols-2 px-4">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              width="50px"
              onClick={handleClick}
              className="cursor-pointer py-2"
            />
          </div>
          <div className="flex items-center justify-end">
            <MenuButton setSidebar={setSidebar} />
            {sidebar ? <MenuSidebar /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
