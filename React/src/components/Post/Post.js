import './Post.css';

export function Post({post}) {
    return (
        <div className={'post flxCol txtJustify'}>
            <p><b>id:  {post.id}</b> / (UserID:  {post.userId})</p>
            <p>Title:  {post.title}</p>
            <p> {post.body}</p>
        </div>
    )
}
