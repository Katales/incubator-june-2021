import "./User.css";

export function User({user, user: {company}, user: {address} }) {
    company = company || {}; // workaround for "cann't read property "name" of undefined (user.company.name)
    address = address || {};
    let {geo} = address;
    geo = geo || {};

    return (

        <div className={"user flxRow wrap flxAcrCenter"}>
            <div className={"userInfo flxCol txtL"}>
                <p><b>{user.id}. {user.name}</b> ({user.username})</p>
                <p>e-mail: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>web: {user.website}</p>
                <p>company: {company.name}
                    (<span>{company.catchPhrase}</span>)</p>
                <p>slogan: {company.bs}</p>
            </div>
            <div className={"userAddr flxCol txtL"}>
                <p><u>Address:</u></p>
                <p>{address.street}, str.</p>
                <p>apt.: {address.suite}</p>
                <p>city: {address.city}</p>
                <p>zip: {address.zipcode}</p>
                <p>gps: {geo.lat}, {geo.lng}</p>
            </div>
        </div>
    )
}
