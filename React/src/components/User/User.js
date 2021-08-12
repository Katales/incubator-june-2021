import "./User.css";

export function User({user}) {
    // console.log(user);
    // console.log(user.company);
    return (
        <div className={"user flxRow wrap flxAcrCenter"}>
            <div className={"userInfo flxCol txtL"}>
                <p><b>{user.id}. {user.name}</b> ({user.username})</p>
                <p>e-mail: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>web: {user.website}</p>
                <p>company: {user.company.name}
                (<span>{user.company.catchPhrase}</span>)</p>
                <p>slogan: {user.company.bs}</p>
            </div>
            <div className={"userAddr flxCol txtL"}>
                <p><u>Address:</u></p>
                <p>{user.address.street}, str.</p>
                <p>apt.: {user.address.suite}</p>
                <p>city: {user.address.city}</p>
                <p>zip: {user.address.zipcode}</p>
                <p>gps: {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>
        </div>
    )
}
