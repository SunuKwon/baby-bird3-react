import React, {useState, useEffect, useCallback} from "react";

export default function FunctionComponet(){
    const [ state, setState ] = useState(0)
    useEffect(() => {
        console.log("렌더링 후 실행됨");
        callback()
        return () => {
            console.log("cleanup 실행");
        };
    }, []);
    const text = '끄악'
    const callback = useCallback(() => {
        console.log('text', text)
    }, [state]);



    return <div>
            <div>{ text }</div>
        <button onClick={()=> setState(state+1)}>{state}</button>
        </div>
}