import './PostLess.css';
import {useState} from "react";

export function PostLess({post, isShowPost, flipIsShowMore}) {
    const postClass = isShowPost ? 'postLess' : 'post';
    let [btnShowMore_txt, setBtnShowMore_txt] = useState('Show more');

    const clickBtnShowMore = function () {
        const newState = flipIsShowMore(post.id);
        setBtnShowMore_txt( newState ? 'Show less' : 'Show more');
    }

    return (
        <div className={`${postClass} flxRow txtJustify`}>
            <div className={'w75prc'} >
                <p><b>id:  {post.id}</b></p>
                <p>Title:  {post.title}</p>
            </div>
            <button className={'button'}
                    onClick={clickBtnShowMore}>{btnShowMore_txt}</button>
        </div>
    )
}
