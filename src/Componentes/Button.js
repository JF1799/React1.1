import React from 'react';

const Button = props =>{
    const{ saludo } = props;
        return(
        <div>
            <button>{props.saludo}</button>
        </div>

    );
};

export  default Button;