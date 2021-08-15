import './PostLess.css';

export function PostLess({post}) {
    return (
        <div className={'postLess flxCol txtJustify'}>
            <p><b>id:  {post.id}</b></p>
            <p>Title:  {post.title}</p>
            <button className={'button'}>Show more</button>
        </div>
    )
}
