//CLASE
import React from 'react';

class Button2 extends React.Component{
    state = {contador: 0 }
    //setState -> Cambiar el valor de nuestra variable
    incrementar = () => (
        this.setState({contador : this.state.contador + 1})
    );
    render(){
        const { contador } = this.state;
        return(
            <div>

                <h1>Clases Impartidas {contador}</h1>
                <button onClick={this.incrementar}>
                    Click
                </button>
            </div>
        );
    }
}

export default Button2;