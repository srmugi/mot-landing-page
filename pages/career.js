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

export default function Career({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/career/title.png" alt="title" width="450px" />
          </center>
          <center className="px-10">
            <img src="/img/career/subtitle.png" alt="subtitle" width="330px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-48">
        {/* <center>
          <div className="text-center text-2xl mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  safeContent.title1.replaceAll("\n", "<br />") ||
                  amplifyDisabledMessage,
              }}
            />
          </div>
          <div className="text-center text-lg mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.subTitle1.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="text-center text-sm md:max-w-4xl">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description1.replaceAll("\n", "<br />"),
              }}
            />
          </div>
        </center>
        <div className="text-xl mt-20 mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.title2.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <div className="text-sm">
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title3.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description3.replaceAll("\n", "<br />"),
            }}
          />
          <br />
          <br />
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title4.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description4.replaceAll("\n", "<br />"),
            }}
          />
          <br />
          <br />
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title5.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description5.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <div className="text-xl mt-20 mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.title6.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <div className="text-sm">
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title7.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description7.replaceAll("\n", "<br />"),
            }}
          />
          <br />
          <br />
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title8.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description8.replaceAll("\n", "<br />"),
            }}
          />
        </div>
        <center className="mt-20">
          <div className="text-center text-2xl mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.title9.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="text-center text-lg mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.subTitle9.replaceAll("\n", "<br />"),
              }}
            />
          </div>
          <div className="text-center text-sm md:max-w-4xl">
            <div
              dangerouslySetInnerHTML={{
                __html: safeContent.description9.replaceAll("\n", "<br />"),
              }}
            />
          </div>
        </center>
        <div className="text-sm mt-20">
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title10.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description10.replaceAll("\n", "<br />"),
            }}
          />
          <br />
          <br />
          <span className="border-l-4 border-black pl-2">
            <span
              dangerouslySetInnerHTML={{
                __html: safeContent.title11.replaceAll("\n", "<br />"),
              }}
            />
          </span>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: safeContent.description11.replaceAll("\n", "<br />"),
            }}
          />
          <br />
        </div> */}
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
