import {useEffect, useState} from "react";
import {getUsers} from "../../services/data.connector";
import {User} from "../User/User";
import {UserPosts} from "../UserPosts/UserPosts";


export function Users () {
    let [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers()
            .then( users => users.map( (user) => ({...user, isShowPosts: false})))
            .then( users => setUsers(users) );
        }, []);

    const flipIsShowPosts = (userId) => {
    // callback: to flip the state of isShowPosts flag (true/false)
        let ret;
        setUsers(users.map(user => {
            if (user.id === userId) {
                user.isShowPosts = ret = !user.isShowPosts;
            }
            return user;
        }));
        return ret;
    };

    return (
        <div className={'users flxCol'}>
            {users.map( user => {
                return ( <div key={user.id}>
                    <User user={user} flipIsShowPosts={flipIsShowPosts}/>
                    {user.isShowPosts && <UserPosts userid={user.id}/>}
                </div>)
            })}
        </div>
    );
}