import "@/styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  useEffect(() => {
    if (isScriptLoaded) {
      console.log(
        "inside use effect -> send page view event -> app.js",
        window.__KP_LOGIN_SDK_INSTANCE__
      );
      const collectionPageViewEvent = new CustomEvent("page_view_kp", {
        detail: {
          type: "collection",
          data: {
            collection_handle: "product-category",
            collection_name: "product-category",
            collection_id: "45678765456",
            img_url:
              "https://d20ce51t0ju3pt.cloudfront.net/images/single-product-images/fast-up-fusion-tech-protein-elevate-clinically-tested-for-2x-faster-absorption-1-1528_1692704801.webp",
          },
        },
      });

      window.dispatchEvent(collectionPageViewEvent);
    }
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src="https://sandbox.pdp.gokwik.co/kwikpass/plugin/build/kp-custom-merchant-v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("kp script loaded");
          setIsScriptLoaded(true);
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}
