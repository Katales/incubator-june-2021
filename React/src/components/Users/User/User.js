import './User.css';

import {Address} from "./Address/Address";

export function User({...user}) {
    return (
        <div id={"user"} className={"user flxRow wrap flxAcrCenter"}>
            <div className={"userInfo flxCol txtL"}>
                <p><b>{user.id}. {user.name}</b> ({user.username})</p>
                <p>e-mail: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>web: {user.website}</p>
                <p>company: {user.company.name}
                    (<span>{user.company.catchPhrase}</span>)</p>
                <p>slogan: {user.company.bs}</p>
            </div>
            <Address {...user.address}/>
        </div>
    )
}


