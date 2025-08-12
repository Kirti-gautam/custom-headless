import "@/styles/globals.css";
import Script from "next/script";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const router = useRouter();

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
              s.defer = true;
              s.src = 'http://sandbox.pdp.gokwik.co/kwikpass/plugin/build/kp-custom-merchant.js';
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
