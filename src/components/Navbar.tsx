import NavButton from "./NavButton";

const Navbar = () => {
    return (
        <div className="w-screen h-20 md:sticky flex flex-row items-center justify-between">
            <div className="h-14 w-14 m-16">
                <img src="assets/Logo.png" alt="Logo"/>
            </div>
            <NavButton />
        </div>
    )
}

export default Navbar