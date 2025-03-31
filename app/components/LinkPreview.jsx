import Link from "next/link";
import { JSDOM } from "jsdom";

const extractMetaTags = async (url) => {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
            (tags, meta) => {
                const name =
                    meta.getAttribute("name") ||
                    meta.getAttribute("property") ||
                    meta.getAttribute("itemprop");
                const content = meta.getAttribute("content");

                if (name && content) {
                    tags[name] = content;
                }

                return tags;
            },
            {}
        );

        return {
            title:
                document.title ||
                metaTags["og:title"] ||
                metaTags["twitter:title"],
            description:
                metaTags.description ||
                metaTags["og:description"] ||
                metaTags["twitter:description"],
            image:
                metaTags.image ||
                metaTags["og:image"] ||
                metaTags["twitter:image"],
        };
    } catch (error) {
        console.error("Error fetching Open Graph details", error);
    }
};

async function LinkPreview({ url }) {
    //here calling the function
    const data = await extractMetaTags(url);

    if (!data) {
        return <p>Failed to fetch link preview.</p>;
    }
    return (
        <Link
            href={url}
            target="_blank"
            className="text-black w-full md:w-[50%] min-h-[200px] cursor-pointer flex flex-col md:flex-row items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
            style={{
                textDecoration: "none",
            }}
        >
            <div className="w-full md:w-auto md:h-full">
                <img
                    src={
                        data.image ||
                        "https://placehold.co/340x200/e4e4e4/8c8c8c?text=" +
                            data.title
                    }
                    alt="Link Preview"
                    className="object-cover w-full md:w-[340px] h-[200px] m-0"
                />
            </div>
            <div className="p-4 w-full md:w-[60%]">
                <h3 className="text-xl md:text-3xl font-bold leading-tight md:leading-[2rem] mb-2">
                    {data.title}
                </h3>
                <p className="text-sm md:text-base line-clamp-3 mb-2">
                    {data.description}
                </p>
                <span className="mt-3 opacity-50 text-xs">&nbsp;{url}</span>
            </div>
        </Link>
    );
}

export default LinkPreview;
