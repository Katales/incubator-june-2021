import "./CmntMore.css"

export function CmntMore({cmnt}) {
    return (
        <div className={'commentMore dottedBorder'}>
            <p><b>by</b> {cmnt.email}</p>
            <p>{cmnt.body}</p>
        </div>
    );
}