/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/layout";
import { ReadButton } from "../components/button";

export default function Custom404() {
  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/common/404.png" alt="title" width="400px" />
          </center>
        </div>
      </div>
      <div className="text-center px-6">
        お探しのページが見つかりませんでした。
      </div>
      <div className="my-40 text-center px-6">
        <ReadButton href="/" text="TOPページへ" />
      </div>
    </Layout>
  );
}
