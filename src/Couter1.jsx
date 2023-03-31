import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Couter1() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res => {
        //         // console.log(res.data)
        //         setUsers(res.data)
        //     })

        // const fetchData = async () => {
        //     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        //     const data = await res.data
        //     console.log(data)
        //     setUsers(data)
        // }
        // fetchData()

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => {
        //         return res.json()
        //     }
        //     )
        //     .then(data => {
        //         console.log(data)
        //         setUsers(data)
        //     })

        // const fetchData = async () => {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //     const data = await res.json()
        //     console.log(data)
        //     setUsers(data)
        // }
        // fetchData()

        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            console.log(data)
            setUsers(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {/* {console.log(users)} */}
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}
