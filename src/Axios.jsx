import axios from 'axios'
import { useEffect, useState } from 'react'
const Axios = () => {
    const [data, setData] = useState([])
    const getData = () => {

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {data.map(item =>

                <div>
                    <h1>{item.id} : {item.name}</h1>
                </div>
            )}
        </>
    )
}

export default Axios