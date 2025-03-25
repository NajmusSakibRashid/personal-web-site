import Profile from "@/app/components/Profile.jsx";
import Projects from "@/app/components/Projects.jsx";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Profile />
            <Projects />
        </div>
    );
}
