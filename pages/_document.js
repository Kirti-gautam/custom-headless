import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.merchantInfo = {
                environment: "sandbox",
                mid: "19mdug4trxwh",
                type: "merchantInfo"
              };
            `,
          }}
        />
      </body>
    </Html>
  );
}
