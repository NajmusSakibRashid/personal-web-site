const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-16">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">Database Design</a>
                <a className="link link-hover">Software Engineering</a>
                <a className="link link-hover">Machine Learning Engineer</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a className="link link-hover">Phone: 01706966900</a>
                <a className="link link-hover">
                    Email: sakib.buetian@gmail.com
                </a>
                <a className="link link-hover">
                    GitHub: https://github.com/NajmusSakibRashid
                </a>
                <a className="link link-hover">
                    LinkedIn: https://www.linkedin.com/in/najmus-sakib-rashid/
                </a>
            </nav>
            {/* <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav> */}
        </footer>
    );
};

export default Footer;
