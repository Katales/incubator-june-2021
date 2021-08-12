import "./UsersPnC.css";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/data.connector";
import {UserNposts} from "../UserNposts/UserNposts";



export function UsersPnC() {
    let [users, setUsers] = useState([]);
    useEffect( () => {
        getUsers().then(users => setUsers(users) );
    }, []);

    return (
        <div id={'users'} className={'users flxCol'}>
            {users.map( user => <UserNposts user={user} key={user.id}/> )}
        </div>
    );
}