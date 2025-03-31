import Profile from "@/app/components/Profile.jsx";
import Projects from "@/app/components/Projects.jsx";
import Skills from "@/app/components/Skills.jsx";
import Education from "@/app/components/Education.jsx";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Profile />
            <div
                className="flex flex-col items-baseline mt-16 w-full p-4 md:p-0 md:w-1/2"
                aria-label="GitHub Profile"
            >
                <h2 className="text-2xl font-bold mb-2">
                    GitHub Contributions
                </h2>
                <p className="text-gray-600 mb-4">
                    Annual overview of my GitHub activity and contributions,
                </p>
            </div>
            <section
                className="flex flex-col items-center m-4"
                aria-label="GitHub Activity"
            >
                <img
                    src="https://ghchart.rshah.org/NajmusSakibRashid"
                    alt="GitHub Contribution Graph"
                    loading="lazy"
                    className="github-contributions"
                />
            </section>
            <Projects />
            <Skills />
            <Education />
        </div>
    );
}
