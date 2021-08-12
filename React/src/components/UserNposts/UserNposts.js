import "./UserNposts.css";

import {User} from "../User/User";
import {PostNcmnts} from '../PostNcmnts/PostNcmnts';
import {useEffect, useState} from "react";
import {getPostsByUser} from "../../services/data.connector";


export function UserNposts({user}) {
    let [posts, setPosts] = useState([] );
    useEffect( () => {
        getPostsByUser(user.id).then( posts => setPosts(posts));
    });

    return (
        <div>
            <User user={user} />
            {posts.map(post => <PostNcmnts post={post} key={post.id}/>)}
        </div>
    )
}