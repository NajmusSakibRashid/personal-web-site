import Carousel from "../components/Carousel";

import certificates from "@/public/assets/scripts/certificate_script.json";

const page = () => {
    return <Carousel images={certificates} />;
};

export default page;
