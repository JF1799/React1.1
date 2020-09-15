//FUNCIONES
import React, {useState} from 'react';

function Incrementar (){
    const [contador, setContador] = useState(0);
    
    return(
        <div>
            <h2>CLASE DE REACT</h2>
            <h4>{contador}</h4>
            <button onClick={() => setContador(contador + 1)}>
                {contador}
            </button>
        </div>
    );
}

export default Incrementar;