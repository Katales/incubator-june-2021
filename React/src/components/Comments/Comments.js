import './Comments.css';

import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.services";
import {Comment} from "./Comment/Comment";

export function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(comments => setComments(comments));
    }, []);

    return (
        <div id={'comments'} className={'comments flxCol'}>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
}