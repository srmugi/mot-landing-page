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

export default function Company({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/company/title.png" alt="title" width="450px" />
          </center>
          <center className="px-30">
            <img src="/img/company/subtitle.png" alt="subtitle" width="120px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-48">
        <div className="grid grid-cols-3 gap-x-2 gap-y-7 font-medium">
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  safeContent.title1.replaceAll("\n", "<br />") ||
                  amplifyDisabledMessage,
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description1.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title2.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description2.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title3.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description3.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title4.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description4.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title5.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description5.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title6.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description6.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title7.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description7.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title8.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description8.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title9.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description9.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title10.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description10.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title11.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description11.replaceAll("\n", "<br />"),
              }}
            />
          </div>
        </div>
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
