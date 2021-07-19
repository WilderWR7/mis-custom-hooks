import { useState } from "react";

export default function useCouter( number) {
    const [state, setstate] = useState( number );
    
    const increment = ()=>{
        setstate(state+1);
    }
    const decrement = ()=>{
        setstate(state-1);
    }
    const reset = ()=> {
        setstate(number);
    }

    return {
        state,increment,decrement,reset
    }
}
