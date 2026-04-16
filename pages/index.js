/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect, useState } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Loader } from "../components/loader";
import { ReadButton } from "../components/button";
import { ParticlesDefault } from "../components/particles";
import { SequenceDefault, SequenceDefaultMobile } from "../components/sequence";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [on, setOn] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const loaded = localStorage.getItem("loaded");

    if (loaded) {
      setLoading(false);
    } else {
      window.addEventListener("load", () => {
        setLoading(false);
        localStorage.setItem("loaded", true);
      });
    }
  }, []);

  useEffect(() => {
    createObserver();
  }, []);

  const handleIntersect = (entries, observer) => {
    const intersectingEntry = entries.find((item) => item.isIntersecting);
    if (intersectingEntry) {
      const id = intersectingEntry.target.id;

      const list = [
        "hero",
        "about",
        "recruit",
        "apply",
        "career",
        "entry",
        "blog",
        "footer",
      ];

      const darkList = ["about", "apply", "entry"];

      if (id !== "footer") {
        setOn(list.indexOf(id));
      }

      if (darkList.includes(id)) setDark(true);
      else setDark(false);
    }
  };

  const createObserver = () => {
    const options = {
      threshold: [0.8, 1],
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(document.querySelector("#hero"));
    observer.observe(document.querySelector("#about"));
    observer.observe(document.querySelector("#recruit"));
    observer.observe(document.querySelector("#apply"));
    observer.observe(document.querySelector("#career"));
    observer.observe(document.querySelector("#entry"));
    observer.observe(document.querySelector("#blog"));
    observer.observe(document.querySelector("#footer"));
  };

  return (
    <div className="snap-mandatory snap-y h-screen overflow-y-auto relative">
      <Head>
        <title>MOT</title>
        <meta name="description" content="This is landing page of MOT Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loader /> : null}
      <Header />
      <ParticlesDefault on={on} />
      <SequenceDefault on={on} dark={dark} />
      <SequenceDefaultMobile on={on} dark={dark} />
      <div
        id="hero"
        className="h-screen snap-center relative"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl text-center mb-10 w-full max-w-2xl px-6">
          Try it, see the possibilities
          <br />
          Try it, find potential and
          <br />
          see how it works out.
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-6">
          MOTはESGを積極的に取り込み
          <br />
          世の中の社会問題をビジネスを通し解決していきます。
        </div>
      </div>
      <div
        id="about"
        className="h-screen snap-center grid grid-cols-2 container mx-auto text-white"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">ABOUT</div>
            <div className="text-xl mb-3">
              あなたの「大切な人」や「大切なもの」を
              <br />
              守れる力が身につく
            </div>
            <div className="text-sm mb-8">
              また「独立支援制度」もある当社でなら、独立したい人もそうでない人も
              <br />
              独立できるくらいのスキルが身に付きます。
            </div>
            <div>
              <ReadButton
                href="/about"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="recruit"
        className="h-screen snap-center grid grid-cols-2 container mx-auto"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="md:col-start-2 col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">採用メッセージ</div>
            <div className="text-sm mb-8">
              代表自身がエンジニアと積極的にコミュニケーションを取り、
              <br />
              日々の悩みや将来の不安など、きめ細かに相談に乗ります。
              <br />
              食事やチャット、電話などでいつでも気軽に話し合いましょう
            </div>
            <div>
              <ReadButton
                href="/recruit"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="apply"
        className="h-screen snap-center grid grid-cols-2 container mx-auto text-white"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">募集要項</div>
            <div className="text-xl mb-3">
              未経験でもチャレンジする
              <br />
              意欲を応援
            </div>
            <div className="text-sm mb-8">
              失敗したとしても、次へのチャレンジに変えていけばいいと考える社風
              <br />
              だからこそ、チャレンジする意欲がある方の未経験スタートを応援します。
            </div>
            <div>
              <ReadButton
                href="/apply"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="career"
        className="h-screen snap-center grid grid-cols-2 container mx-auto"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="md:col-start-2 col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">キャリアアップ・研修・福利厚生</div>
            <div className="text-xl mb-3">
              未経験からでも活躍できる環境を整えています
              <br />
              ともにIT業界で市場価値の高い人材になりませんか？
            </div>
            <div className="text-sm mb-8">
              600社以上と取引するグループ基盤の元
              <br />
              どんなシステムを作るのかをまとめ
              <br />
              設計書を作る上流工程のプロを
              <br />
              未経験から育成しています！
            </div>
            <div>
              <ReadButton
                href="/career"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="entry"
        className="h-screen snap-center grid grid-cols-2 container mx-auto text-white"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">エントリーフォーム</div>
            <div className="text-xl mb-3">
              人のために頑張れる
              <br />
              そんな仲間に出会いたい。
            </div>
            <div className="text-sm mb-8">
              あなたも一緒にMOTで理想の自分を目指しませんか？
            </div>
            <div>
              <ReadButton
                href="/entry"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog"
        className="h-screen snap-center grid grid-cols-2 container mx-auto"
        style={{
          color: dark ? "white" : "black",
          transition: "all 0.2s ease-in",
        }}
      >
        <div className="md:col-start-2 col-span-2 px-6 md:col-span-1 h-full flex items-center">
          <div>
            <div className="text-2xl mb-3">ブログ</div>
            <div className="text-sm mb-8">
              日々、開発やインフラ問わず、ちょっとした出来事を更新していきます。
            </div>
            <div>
              <ReadButton
                href="/blog"
                text="Read More"
                color={dark ? "white" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="snap-center">
        <Footer />
      </div>
    </div>
  );
}
