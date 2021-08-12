import './Comments.css';

import {useEffect, useState} from "react";
import {getComment, getComments} from "../../services/comment.services";
import {Comment} from "./Comment/Comment";

export function Comments() {
    let [commentN, setCommentN] = useState([]);
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComment(3).then(comment => setCommentN(comment));
        getComments().then(comments => setComments(comments));
    }, []);

    return (
        <div id={'comments'} className={'comments flxCol'}>
            <p> One comment: (to test <b>getComment(id)</b>)</p>
            <Comment comment={commentN}/>
            <hr/>
            <p>ALL comments:</p>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
}