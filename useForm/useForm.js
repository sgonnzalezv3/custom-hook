import { useState } from "react";

export const useForm = (initialState = {}) => { //use form que recibe el objeto initialstate

    /* Custom Hook encargado de manejar los formularios */

    //poner campos obligatorios, banderas de correctos, argumentos de validacion
    //aca se pone toda la lógica
   
    const [values, setValues] = useState(initialState)
    const reset = () =>{ //funcion que resetea el campo de texto
        setValues( initialState ); //pone el valor por defecto (nada)
    }

    const handleInputChange = ({ target }) => { // funcion que recibe el evento de cambio en el form
        setValues({ //llamamos el setForMstate
            ...values, //lo desestrucutramos con el fin de no cambiar todo
            [target.name]: target.value // esta propiedad es lo que viene en el objeto
        });
    }
    return [values, handleInputChange,reset]; // retorna
}
