import './Users.css';

import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../services/user.services";
import {User} from "./User/User"

export function Users() {
    let [user, setUserN] = useState([]);
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUser(1).then(user => {
            setUserN(user);
            // console.log(user);
        });
        getUsers().then(users => setUsers(users));
    }, []);

    return (
        <div id={'users'} className={'users flxCol'}>
            {/*<p> One user: (to test <b>getUser(id)</b>)</p>*/}
            {/*<User user={user}/>*/}
            {/*<hr/>*/}
            {/*<p>ALL users:</p>*/}
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    )
}


