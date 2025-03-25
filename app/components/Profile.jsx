import Image from "next/image";
import ProfilePic from "@/public/assets/img/profile.png";
import ProfileScript from "@/public/assets/scripts/profile_script.json";
import { profile } from "console";
import path from "path";

const Profile = () => {
    return (
        <div className="flex flex-col gap-4 items-left mt-16 md:w-1/2 m-4">
            <div className="flex gap-8">
                <Image
                    src={ProfilePic}
                    alt="Profile"
                    className="rounded-full h-20 w-20"
                />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                        {ProfileScript.name}
                    </span>
                    <span className="text-sm text-gray-500">
                        {ProfileScript.role.join(", ")}
                    </span>
                    <a
                        href={`mailto:${ProfileScript.email}`}
                        className="text-sm text-gray-500 underline"
                    >
                        {ProfileScript.email}
                    </a>
                </div>
            </div>
            <p className="text-justify text-gray-700 text-sm">
                {ProfileScript.description}
            </p>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.6-.33c1.12.45 2.33.7 3.58.7a1.5 1.5 0 011.5 1.5v3.75a1.5 1.5 0 01-1.5 1.5C10.29 22.5 1.5 13.71 1.5 3.75A1.5 1.5 0 013 2.25h3.75a1.5 1.5 0 011.5 1.5c0 1.25.25 2.46.7 3.58a1.5 1.5 0 01-.33 1.6l-2.2 2.2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {ProfileScript.contact.phone}
                </span>
                <a
                    href={ProfileScript.contact.github}
                    className="text-sm text-gray-500 underline flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.936.36.31.682.921.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    @{path.basename(ProfileScript.contact.github)}
                </a>
                <a
                    href={ProfileScript.contact.linkedin}
                    className="text-sm text-gray-500 underline flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.666H9.35V9.998h3.414v1.432h.048c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.27 2.37 4.27 5.455v6.419zM5.337 8.566c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zm1.777 11.886H3.56V9.998h3.554v10.454zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    @{path.basename(ProfileScript.contact.linkedin)}
                </a>
            </div>
        </div>
    );
};

export default Profile;
