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
        <div className="text-2xl mb-10">
          <div
            dangerouslySetInnerHTML={{
              __html:
                safeContent.title.replaceAll("\n", "<br />") ||
                amplifyDisabledMessage,
            }}
          />
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
