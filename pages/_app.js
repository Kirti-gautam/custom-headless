import "@/styles/globals.css";
import Script from "next/script";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.__KP_LOGIN_SDK_INSTANCE__.logEvents({
      type: "collection",
      data: {
        handle: `${router.pathname}`,
        name: "product-category",
        collection_id: "45678765456",
        img_url:
          "https://d20ce51t0ju3pt.cloudfront.net/images/single-product-images/fast-up-fusion-tech-protein-elevate-clinically-tested-for-2x-faster-absorption-1-1528_1692704801.webp",
      },
    });
  }, [router.pathname]);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              window.__KP_LOGIN_SDK_INSTANCE__ = window.__KP_LOGIN_SDK_INSTANCE__ || {};
              window.__KP_LOGIN_SDK_INSTANCE__.logEvents = window.__KP_LOGIN_SDK_INSTANCE__.logEvents || function(event){
                window.kpqueue = window.kpqueue || [];
                window.kpqueue.push(event);
              };
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://sandbox.pdp.gokwik.co/kwikpass/plugin/build/kp-custom-merchant-v2.js';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            })();
          `,
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}
