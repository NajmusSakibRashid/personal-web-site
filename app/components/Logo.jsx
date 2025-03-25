import Image from "next/image";

import logoSrc from "@/public/assets/img/logo.png";

const Logo = () => {
    return (
        <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
            href="../templates/personal/index.html"
            aria-label="Preline"
        >
            <Image
                src={logoSrc}
                alt="logo"
                className="h-8 w-auto rounded-full"
            />
        </a>
    );
};

export default Logo;
