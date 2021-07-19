import { useState } from "react"

export default function useForm(initialState = {}) {
    const [form, setform] = useState(initialState)

    const reset = ()=>{
        setform(initialState);
    }
    
    const handleInput = ({target})=>{
        setform({
            ...form,
            [target.name]: target.value  //el name del input debe tener el inirialState
        })
    }

    return [form,handleInput,reset];
}
