import './Users.css';

import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.services";
import {User} from "./User/User"

export function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []);

    return (
        <div id={'users'} className={'users flxCol'}>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    )
}


