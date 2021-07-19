import { useEffect, useRef, useState } from "react";

export default function useFetch( url ) {
    const estaMontado = useRef(true);

    useEffect(() => {
        return () => {
            estaMontado.current = false;   
        }
    }, [])

    const [state, setstate] = useState({
        data: null,
        error: null,
        loading: true
    })

    useEffect(() => {
        fetch(url)
            .then( resp => resp.json() )
                .then(data => { 
                    if(estaMontado.current){
                        setstate(  { data,error: null, loading:false } ) 
                    }else{
                        console.log('desmostado')
                    }
                })
    }, [url])
    
    return state;

}
