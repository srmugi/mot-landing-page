import Head from "next/head";

import { Header } from "../header";
import { Footer } from "../footer";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>MOT Inc.</title>
        <meta name="description" content="This is landing page of MOT Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Header />
        <div className="min-h-screen relative">{props.children}</div>
        <Footer />
      </main>
    </div>
  );
}
