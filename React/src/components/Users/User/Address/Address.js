import {Geo} from "./Geo/Geo"

export function Address({...addr}) {
    return (
        <div className={"userAddr flxCol txtL"}>
            <p><u>Address:</u></p>
            <p>{addr.street}, str.</p>
            <p>apt.: {addr.suite}</p>
            <p>city: {addr.city}</p>
            <p>zip: {addr.zipcode}</p>
            <Geo {...addr.geo}/>
        </div>

)
}