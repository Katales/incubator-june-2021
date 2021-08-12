import "./Comment.css"

export function Comment ({comment}) {
    return (
        <div className={'comment dottedBorder'}>
            <p># {comment.id}, Name: {comment.name}  e-mail: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
}