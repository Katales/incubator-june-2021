import './Posts.css';

import {useEffect, useState} from "react";
import {getPost, getPosts} from '../../services/post.services';
import {Post} from "./Post/Post";


export function Posts () {
    let [postN, setPostN] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect( () => {
        getPost(2).then(postN => setPostN(postN));
        getPosts().then( posts => setPosts(posts));
    }, []);

    return (
        <div id={'posts'} className={'posts flxCol'}>
            <p> One post: (to test <b>getPost(id)</b>)</p>
            <Post post={postN}/>
            <hr/>
            <p>ALL posts:</p>
            {posts.map( post => <Post post={post} key={post.id} /> )}
        </div>
    )
}