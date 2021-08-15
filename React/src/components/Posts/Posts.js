import {useEffect, useState} from "react";
import {getPosts} from "../../services/data.connector";
import {PostLess} from "../PostLess/PostLess";
import {PostMore} from "../PostMore/PostMore";


export function Posts() {
    let [posts, setPosts] = useState([]);
    let [isShowMore, setIsShowMore] = useState([]);
    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    }, []);

    const flipIsShowMore = function (postId) {
        const tmpArr = [...isShowMore];
        const newState = tmpArr[postId] = !tmpArr[postId]
        setIsShowMore(tmpArr);
        return newState;
    }

    return (
        <div className={'posts flxCol'}>
            {posts.map(post =>
                <div key={post.id}>
                    <PostLess post={post} isShowPost={isShowMore[post.id]}
                        flipIsShowMore={flipIsShowMore}/>
                    {isShowMore[post.id] && <PostMore post={post}/>}
                </div>
            )}
        </div>
    )
}