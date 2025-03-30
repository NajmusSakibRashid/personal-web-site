import LinkPreview from "./LinkPreview";

const WebPagePreview = ({ urls }) => {
    return (
        <div className="flex flex-col items-center mt-16 m-4 gap-4">
            {urls.map((url, index) => (
                <LinkPreview key={index} url={url} />
            ))}
        </div>
    );
};

export default WebPagePreview;
