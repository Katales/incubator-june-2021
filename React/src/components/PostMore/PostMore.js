import './PostMore.css';

export function PostMore({post}) {
    return (
        <div className={'postMore flxCol txtJustify'}>
            <p>(<b>by</b> UserID: {post.userId})</p>
            <p> {post.body}</p>
        </div>
    )
}
