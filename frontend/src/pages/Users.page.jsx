import React, { useEffect, useState } from 'react'
import "../App.css"

const Users = ({page, setPage}) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const url="http://localhost:3000";
        fetch(url + "/get-data")
        .then(responce => responce.json())
        .then(({data}) => {

            setData(data)

        })

    }, [])

    return (
        <div className='myUser'>

            <h1>Users Table</h1>
            
            <button className='register' onClick={() => setPage(!page)}>Registration Page</button>

            <table>
                
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        data.map((d, i) => {

                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.username}</td>
                                </tr>
                            )

                        })
                    }

                </tbody>

            </table>

        </div>
    )
}

export default Users