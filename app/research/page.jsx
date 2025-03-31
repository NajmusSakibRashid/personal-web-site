import Carousel from "../components/Carousel";

import slides from "@/public/assets/scripts/research_script.json";

const page = () => {
    return <Carousel images={slides} />;
};

export default page;
