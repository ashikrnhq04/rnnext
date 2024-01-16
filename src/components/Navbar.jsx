import Logo from "./parts/Logo.jsx";
import Button from "./parts/Button.jsx";
import logoImage from "./../assets/lws-logo-en.svg";


export default function Navbar() {
    return (
        <>
            <nav className="py-6">
                <div className="container mx-auto flex items-center justify-between gap-x-6">
                    <a href="/">
                        <Logo alt={"LWS"} logo={logoImage}/>
                    </a>
                    <Button skin={"black"} link={"#"}>
                        Get Admission
                    </Button>
                </div>
            </nav>
        </>
    )
}