import "@/styles/globals.css";
import Script from "next/script";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.kpqueue.push({
      type: "collection",
      data: {
        handle: `${router.pathname}`,
        name: "product-category",
        collection_id: "45678765456",
        img_url:
          "https://d20ce51t0ju3pt.cloudfront.net/images/single-product-images/fast-up-fusion-tech-protein-elevate-clinically-tested-for-2x-faster-absorption-1-1528_1692704801.webp",
      },
    });
  }, []);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              // add a queue event here
              window.kpqueue = window.kpqueue || [];
              function loadEvents(){ window.kpqueue.push(arguments)}
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
