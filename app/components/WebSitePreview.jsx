// components/WebsitePreview.jsx
"use client";

import React, { useState, useEffect } from "react";

const WebsitePreview = ({
    url,
    width = 320,
    height = 240,
    showControls = true,
}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    useEffect(() => {
        // Reset states when URL changes
        setLoading(true);
        setError(null);

        // Simple validation
        if (!url) {
            setError("Please provide a valid URL");
            setLoading(false);
            return;
        }

        // Use a third-party screenshot service
        // You could also implement your own API route for this
        const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
            url
        )}&screenshot=true&meta=false&embed=screenshot.url`;

        fetch(screenshotUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch preview");
                }
                return response.json();
            })
            .then((data) => {
                if (
                    data.status === "success" &&
                    data.screenshot &&
                    data.screenshot.url
                ) {
                    setPreviewUrl(data.screenshot.url);
                } else {
                    throw new Error("Invalid preview data");
                }
            })
            .catch((err) => {
                setError(err.message || "Failed to generate preview");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return (
        <div className="website-preview rounded-lg overflow-hidden border border-gray-300 bg-white">
            {showControls && (
                <div className="browser-controls bg-gray-100 p-2 border-b border-gray-300 flex items-center">
                    <div className="flex space-x-1.5 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="url-bar flex-1 bg-white text-sm py-1 px-2 rounded truncate text-gray-600">
                        {url || "https://example.com"}
                    </div>
                </div>
            )}

            <div
                className="preview-container relative"
                style={{ width: `${width}px`, height: `${height}px` }}
            >
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div>
                )}

                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-red-500 p-4 text-center">
                        <p>{error}</p>
                    </div>
                )}

                {previewUrl && !loading && !error && (
                    <img
                        src={previewUrl}
                        alt={`Preview of ${url}`}
                        className="w-full h-full object-cover"
                        onError={() => setError("Failed to load preview image")}
                    />
                )}
            </div>
        </div>
    );
};

export default WebsitePreview;
