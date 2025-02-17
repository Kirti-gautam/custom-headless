import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("use effect -> send page view event");
    const collectionPageViewEvent = new CustomEvent("custom-page-view", {
      detail: {
        type: "collection",
        data: {
          collection_handle: "about-us",
          collection_name: "product-category",
          collection_id: "45678765456",
          img_url:
            "https://d20ce51t0ju3pt.cloudfront.net/images/single-product-images/fast-up-fusion-tech-protein-elevate-clinically-tested-for-2x-faster-absorption-1-1528_1692704801.webp",
        },
      },
    });

    window.dispatchEvent(collectionPageViewEvent);
  }, []);
  return <div>About</div>;
};

export default About;
