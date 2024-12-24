import React, { useState } from 'react'
import InputBox from '../components/InputBox.component'

function Registration({page, setPage}) {

    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [username, setusername] = useState("");

   

    // const [abc, setabc] = useState([]);

    

    function register()
    {

            const url="http://localhost:3000";

            fetch(url + "/send-data", {

                method:'POST',                                            // By Default Method is GET
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({name, username, pass})

            })
            .then((responce) => responce.json())
            .then(d => {
              
                // abc = d.data;
                alert("Data Saved")
                // setabc(d.data)

            })
            .catch((e) => {
                alert("Please On Your Server");
            })

    }


    return (
        <div className='input-container'>

            <h1>Registration Form</h1>

            <InputBox cls="input-field" type="text" placeholder="Name" id="name" value={name} fxn={setname} />

            <InputBox cls="input-field" type="text" placeholder="Username" id="username" value={username} fxn={setusername} ></InputBox>

            <InputBox cls="input-field" type="password" placeholder="Password" id="pass" value={pass}
            fxn={setpass}></InputBox>

            

            <button className='register' onClick={() => register()}>Register</button>

            <button className='register' onClick={() => setPage(!page)}>Users Page</button>


            {/* {JSON.stringify(abc)} */}

            {/* {
                abc.map((d, i) => {  

                    return(
                        <div key={i} style={{marginBottom:"20px"}}>
                            name : {d.name}
                            <br />
                            username : {d.username}
                        </div>
                    )

                })
            } */}

        </div>
    )
}

export default Registration
