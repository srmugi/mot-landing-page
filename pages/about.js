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

export default function About({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/about/title.png" alt="title" width="400px" />
          </center>
          <center className="px-28">
            <img src="/img/about/subtitle.png" alt="subtitle" width="170px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <center>
          <div className="text-center text-2xl mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  safeContent.title.replaceAll("\n", "<br />") ||
                  amplifyDisabledMessage,
              }}
            />
          </div>
          <div className="text-center text-sm md:max-w-4xl">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description.replaceAll("\n", "<br />"),
              }}
            />
          </div>
        </center>
        <div className="grid grid-cols-3 items-end my-40 gap-x-10 gap-y-10 md:gap-y-40">
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/01.jpg" alt="about01" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title1.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description1.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/about/02.jpg" alt="about02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2 md:col-start-1">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title2.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description2.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/about/02.jpg" alt="about02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/03.jpg" alt="about03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title3.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description3.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/about/04.png" alt="about03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title4.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description4.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/about/04.png" alt="about03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/about/05.jpg" alt="about05" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title5.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description5.replaceAll("\n", "<br />"),
                }}
              />
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
