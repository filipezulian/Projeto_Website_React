import React from "react";
import Aviso from "./Aviso";

class Carrossel extends React.Component {
    render() {
        return (
            <div className="w-screen h-96 flex justify-center bg-azul-agua">
                <Aviso />
            </div>
        )
    }
}

export default Carrossel