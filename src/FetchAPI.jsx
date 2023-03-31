// import React, { useEffect } from 'react'

import { useEffect, useState } from "react"

// const FetchAPI = () => {
//     const getAPI = () => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }

//     useEffect(() => {
//         getAPI()
//     })
//     return (
//         <div>
//             <button onClick={getAPI}>click here</button>
//         </div>
//     )
// }

// export default FetchAPI


const FetchAPI = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(result => {

                console.log(result.message)
                setData(result.message)
            }

            )
    }, [])

    return (
        <div>
            <p>the list</p>
            <img src={data} alt="" />
        </div>
    )
}

export default FetchAPI