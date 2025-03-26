import Profile from "@/app/components/Profile.jsx";
import Projects from "@/app/components/Projects.jsx";
import Skills from "@/app/components/Skills.jsx";
import Education from "@/app/components/Education.jsx";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Profile />
            <Projects />
            <Skills />
            <Education />
        </div>
    );
}
