// ok anton i have no idea how to do this i tried 

// import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
// import React, { useState } from "react";


// const UserDisplay = () => {
//     const [listOfUsers, setListOfUsers] = useState([
//         {id: 1, name: "test", age: 1, username: "test"},
//     ]);
//     return (
//         <div className="UserDisplay">
//             {listOfUsers.map((user) => {
//                 <h1>Name: {user.name}</h1>;
//             })
//         </div>
//     );
// }
  
//   export default UserDisplay;

import {useState, useEffect} from "react";
import Axios from "axios";

const UserDisplay = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/user").then((res) => {
            setListOfUsers(res.data);
        })
    }, [])
   // alert(listOfUsers);
    return (
            listOfUsers.map((user) => {
                return (
                    <div>
                    <h1> Username: {user.username}</h1>
                    <h1> email: {user.email}</h1>
                    </div>
                )
            })
        )

}

export default UserDisplay;
