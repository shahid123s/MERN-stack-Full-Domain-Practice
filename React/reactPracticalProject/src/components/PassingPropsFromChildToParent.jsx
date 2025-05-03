import React, { useState } from "react";


export  function Parent  () {
    const [data, setData] = useState(null);

    function dataFromChild (data) {
        setData(data)
    }

    return (
        <div>
            <h1>Parent</h1>
            <Child  dataTransfer = {dataFromChild}/>
        </div>
    )

}


export function Child ({dataTransfer}) {
    dataTransfer('Data from child')
    return (
        <div>
            <h1>Child</h1>
        </div>
    )
}