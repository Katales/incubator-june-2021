import {usersList} from "./datafile";

import {User} from './User/User';

export function Users () {
    const contUsers = usersList.map( (el, index) => {
        return (
            <div key={index}>
                <User {...usersList[index]}/>
            </div>
        )
    } )
    return (
        <div>
            {contUsers}
        </div>
    )
}