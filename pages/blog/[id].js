/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { amplifyDisabledMessage } from "../../src/amplifyDisabled";

import { Layout } from "../../components/layout";
import { ReadButton } from "../../components/button";
import { Loader } from "../../components/loader";
import { PageContent } from "../../components/content";

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [],
  };
}

export async function getStaticProps() {
  return {
    props: {
      blog: null,
    },
  };
}

export default function Blog({ blog }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!blog) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-40 text-center">
          <div className="text-2xl mb-6">{amplifyDisabledMessage}</div>
          <ReadButton href="/blog" text="記事一覧へ" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-40">
        <div className="text-center text-2xl">{blog.title}</div>
        <div className="text-sm my-40">{blog.description}</div>
        <PageContent content={blog.content} />
        <div className="mt-40 text-center">
          <ReadButton href="/" text="TOPページへ" />
        </div>
      </div>
    </Layout>
  );
}
