/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/layout";
import { ReadButton } from "../components/button";

export default function Custom404() {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        <div>
          <div className="text-center text-3xl px-6 mb-8">
            送信完了しました。
          </div>
          <div className="text-center px-6 mb-16">
            3営業日ほどでご連絡させていただきます。
          </div>
          <div className="text-center px-6">
            <ReadButton href="/" text="TOPページへ" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
