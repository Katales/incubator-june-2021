import {useEffect, useState} from "react";
import {getPostsByUser} from "../../services/data.connector";
import {Post} from "../Post/Post";


export function UserPosts ({userid}) {
    let [posts, setPosts] = useState([]);
    useEffect( () => {
        getPostsByUser(userid).then(posts => setPosts(posts));
    }, [userid]);

    return (
        <div className={'posts flxCol'}>
            {posts.map( post => <Post post={post} key={post.id}/> )}
        </div>
    )
}