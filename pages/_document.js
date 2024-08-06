import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.merchantInfo = {
                environment: "dev",
                mid: "19g6iljvsb34d",
                type: "merchantInfo"
              };
            `,
          }}
        />
        <Script src="https://dev.pdp.gokwik.co/kwikpass/plugin/build/kp-custom-merchant.js" strategy='afterInteractive' />
      </body>
    </Html>
  )
}
