// import './css/bem.css'
// import './css/common.css'
import {useEffect, useState} from "react";

export default function App() {
    return (
        <div className="taskScreen">
            <Users/>
        </div>
    );
}

function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => setUsers(users));
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(resp => resp.json())
            .then(user => setUser(user));
    }, []);

    const nextUser = (id) => {
        console.log('<nextUser> id =', id )
        setUser(users[id - 1]);
    }

    return (
        <div>
            <User user={user} nextUser={nextUser}/>
        </div>
    )
}

function User({user, nextUser}) {
    user = user || {};

    const clickBtn = function () {
        // console.log('<clickBtn> currUserId=', currUserId )
        // setCurrUserId(currUserId + 1);
        // console.log('<clickBtn> currUserId + 1 =', currUserId )
        nextUser(user.id + 1);
    }

    return (
        <div className={"user"}>
            <div className={"userInfo"}>
                <p><b>{user.id}. {user.name}</b> ({user.username})</p>
                <p>e-mail: {user.email}</p>
                <p>phone: {user.phone}</p>
            </div>
            <button className={'button'} onClick={clickBtn}>
                {`Next (${user.id})`}
            </button>
        </div>
    )
}
