/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { format } from "date-fns";
import { amplifyDisabledMessage } from "../../src/amplifyDisabled";

import { Layout } from "../../components/layout";
import { ReadButton } from "../../components/button";

export async function getServerSideProps() {
  return {
    props: {
      blogs: [],
    },
  };
}

export default function Blog({ blogs }) {
  return (
    <Layout>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <img src="/img/common/bg.png" alt="bg" style={{ maxHeight: "80%" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <center className="mb-4 px-32">
            <img src="/img/blog/title.png" alt="title" width="300px" />
          </center>
          <center className="px-48">
            <img src="/img/blog/subtitle.png" alt="subtitle" width="150px" />
          </center>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center text-2xl mb-20">記事一覧</div>
        <div className="grid grid-cols-3 gap-20">
          {!blogs.length && (
            <div className="col-span-3 text-center text-sm">
              {amplifyDisabledMessage}
            </div>
          )}
          {blogs.map((blog, idx) => (
            <div key={`blog-${idx}`} className="col-span-3 md:col-span-1">
              <div
                className="h-48 bg-cover bg-no-repeat bg-center bg-primary"
                style={{ backgroundImage: `url("${blog.cover}")` }}
              />
              <div className="text-xs">
                {format(new Date(blog.createdAt), "yyyy.MM.dd")}
              </div>
              <Link href={`/blog/${blog.id}`}>
                <div className="text-lg font-bold my-2 cursor-pointer hover:underline underline-offset-4">
                  {blog.title}
                </div>
              </Link>
              <div className="text-sm">{blog.description}</div>
            </div>
          ))}
        </div>
        <div className="my-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
