import {useState} from 'react';

export const useCounter = (initialState = 10) => { // si no mandan nada es 10
    const [counter, setCounter] = useState(initialState); //10

    const increment = ()=>{ //incrementa el state en 1 : El parametro factor permite asignar el valor a aumentar
     setCounter( counter + 1 );
    }
    
    const decrement = ()=>{ // decrementa el state en 1; El parametro factor permite asignar el valor a decrementar
        setCounter( counter - 1 );
    }

    const reset = ()=>{  // reinicia el contador a su valor por defecto (initialState)
        setCounter(initialState);
    }
    
    return { // se puede retornar arreglo u objeto. se retornan los parametros 
        counter,
        increment,
        decrement,
        reset
    };
}
