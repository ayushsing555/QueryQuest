import {useEffect, useState} from "react";

export function ActiveUser() {
    let Active = [];
    const [user, setUsr] = useState([]);
    const getUsers = async () => {
        const res = await fetch("http://localhost:8000/user");
        const data = await res.json();
        setUsr(data);
    };
    user.map((elem) => {
        return(
            Active.push(elem.userName)
        )
        
    });
    
    useEffect(() => {
        getUsers();
    }, [1]);
    return Active;
}