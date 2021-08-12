import "./Cmnt.css"

export function Cmnt({cmnt}) {
    return (
        <div className={'comment dottedBorder'}>
            <p># {cmnt.id}, Name: {cmnt.name}  e-mail: {cmnt.email}</p>
            <p>{cmnt.body}</p>
        </div>
    );
}