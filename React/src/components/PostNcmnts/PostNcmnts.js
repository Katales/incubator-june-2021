import './PostNcmnts.css';

import {Post} from "../Post/Post";
import {Cmnt} from "../Cmnt/Cmnt";
import {useEffect, useState} from "react";
import {getCmntsByPost} from "../../services/data.connector";

export function PostNcmnts({post}) {
    let [cmnts, setCmnts] = useState([]);
    useEffect( () => {
        getCmntsByPost(post.id).then( cmnts => setCmnts(cmnts));
    });
    return (
        <div>
            <Post post={post} />
            {cmnts.map(cmnt => <Cmnt cmnt={cmnt} key={cmnt.id}/>) }
        </div>
    )
}