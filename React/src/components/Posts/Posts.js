import {useEffect, useState} from "react";
import {getPosts} from "../../services/data.connector";
import {PostLess} from "../PostLess/PostLess";
import {PostMore} from "../PostMore/PostMore";


export function Posts () {
    let [posts, setPosts] = useState([]);
    useEffect( () => {
        getPosts().then(posts => setPosts(posts));
    }, []);

    return posts.map( post =>
        <div className={'posts flxCol'} key={post.id}>
            <PostLess post={post}/>
            <PostMore post={post}/>
        </div>
    )
}