import React from "react";


const HolaMundo = () =>{
    const red = "container-red";
    const saludo = "Hola Jeff";
    const esTrue = true;
    return(
        <div className={red}>
            <h1>{saludo}</h1>
            {esTrue ? "Verdadero " : "Falso"}
        </div>
    );
};

export default HolaMundo;