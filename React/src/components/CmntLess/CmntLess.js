import "./CmntLess.css"

export function CmntLess({cmnt}) {
    return (
        <div className={'commentLess dottedBorder flxRow'}>
            <p><b># {cmnt.id}</b>, Name: {cmnt.name}</p>
            <button className={'button'}>Show more</button>
        </div>
    );
}