import "@/styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://sandbox.pdp.gokwik.co/kwikpass/plugin/build/kp-custom-merchant-v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("kp script loaded");
          window.dispatchEvent(new Event("kp_script_loaded"));
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}
