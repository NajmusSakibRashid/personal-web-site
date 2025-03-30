"use client";

const Carousel = ({ images }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
            <div
                data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
    }'
                className="relative"
            >
                <div className="hs-carousel relative overflow-hidden w-full h-screen bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 h-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="hs-carousel-slide h-full w-full"
                            >
                                <div className="flex justify-center h-full w-full bg-gray-100 p-6 dark:bg-neutral-900">
                                    <div className="relative w-full h-full">
                                        {/* Loading spinner */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
                                        </div>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-contain"
                                            onLoad={(e) => {
                                                e.target.parentElement.querySelector(
                                                    "div"
                                                ).style.display = "none";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                    <button
                        type="button"
                        className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none inline-flex justify-center items-center w-8 h-8 text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-full dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        <span className="text-2xl" aria-hidden="true">
                            <svg
                                className="shrink-0 size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                        </span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        type="button"
                        className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none inline-flex justify-center items-center w-8 h-8 text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-full dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        <span className="sr-only">Next</span>
                        <span className="text-2xl" aria-hidden="true">
                            <svg
                                className="shrink-0 size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
            </div>
        </div>
    );
};

export default Carousel;
