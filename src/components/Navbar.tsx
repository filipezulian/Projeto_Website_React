import React from "react";
import NavButton from "./NavButton";
import Hamburger from "./Hamburger";

class Navbar extends React.Component{
    render() {
            return(
                <div className="w-screen h-20 flex items-center justify-between shadow-lg">
                    <div className="bg-slate-700 h-14 w-14 m-16">

                    </div>
                    <NavButton/>
                    <Hamburger/>
                </div>
            )
        }
}

export default Navbar