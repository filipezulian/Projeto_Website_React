import React from "react";


class NavButton extends React.Component {
    render() {
        return (
            <ul className="hidden list-none md:flex flex-nowrap">
                <li className="hover:underline m-10">Home</li>
                <li className="m-10">Serviços</li>
                <li className="m-10">Contato</li>
                <li className="m-10">Perguntas Frequentes</li>
            </ul>
        )
    }
}

export default NavButton