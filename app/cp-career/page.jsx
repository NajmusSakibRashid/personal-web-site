import WebPagePreview from "../components/WebPagePreview";
import webpages from "@/public/assets/scripts/webpage_script.json";

const page = () => {
    return <WebPagePreview urls={webpages} />;
};

export default page;
