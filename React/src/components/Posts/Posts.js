import './Posts.css';

import {useEffect, useState} from "react";
import {getPosts} from '../../services/post.services';
import {Post} from "./Post/Post";


export function Posts () {
    let [posts, setPosts] = useState([]);

    useEffect( () => {
        getPosts().then( posts => setPosts(posts));
    }, []);

    return (
        <div id={'posts'} className={'posts flxCol'}>
            {posts.map( post => <Post post={post} key={post.id} /> )}
        </div>
    )
}