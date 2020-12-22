import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null }); //useState con los parametros del objeto
    const isMounted = useRef(true); // mantenga la referencia de cuando el componente esta montado o cuando el hook esta vivo

    useEffect(() => {

        return () => { // cuando se desmonte
            isMounted.current = false;  //cambiar el valor del ismounted a false!
        } //no va disparar nuevamente la referencia, sino que la mantiene
    }, [])

    useEffect(() => { // se dispara un efecto cuando se recibe una url



        setState({ data: null, loading: true, error: null }); // regresar un nuevo estado para que salga el loading
        fetch(url) // manda url, regresa promesa 
            .then(resp => resp.json()) //regresa otra promesa
            .then(data => { // regresa la data

                    if (isMounted.current) {
                        setState({ //llama el setState
                            loading: false, //false porque termina de cargar
                            error: null, // null porque llego a este punto
                            data //data que se recibe de la respouesta del endPoint
                        })
                    }
                    
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });

    }, [url]); // efecto se ejecuta cuando la url cambia


    return state;


}
