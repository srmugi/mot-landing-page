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

export default function Recruit({ content }) {
  const safeContent = content ?? emptyContent;

  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-20">
            <img src="/img/recruit/title.png" alt="title" width="450px" />
          </center>
          <center className="px-28">
            <img src="/img/recruit/subtitle.png" alt="subtitle" width="200px" />
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
        <div className="grid grid-cols-3 my-40 gap-x-10 gap-y-10 md:gap-y-40">
          <div className="col-span-3">
            <div className="text-5xl mb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title1.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description1.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/01.jpg" alt="recruit01" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
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
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/recruit/02.jpg" alt="recruit02" width="100%" />
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
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/recruit/02.jpg" alt="recruit02" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/03.jpg" alt="recruit03" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title4.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description4.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="text-5xl mb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title5.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description5.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/04.jpg" alt="recruit04" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title6.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description6.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/recruit/05.jpg" alt="recruit05" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title7.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description7.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/recruit/05.jpg" alt="recruit05" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/06.jpg" alt="recruit06" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title8.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description8.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="text-5xl mb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title9.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description9.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/07.jpg" alt="recruit07" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title10.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description10.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:hidden">
            <img src="/img/recruit/08.jpg" alt="recruit08" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title11.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description11.replaceAll("\n", "<br />"),
                }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <img src="/img/recruit/08.jpg" alt="recruit08" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-1">
            <img src="/img/recruit/09.jpg" alt="recruit09" width="100%" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-2xl mb-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.title12.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: safeContent.description12.replaceAll("\n", "<br />"),
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
