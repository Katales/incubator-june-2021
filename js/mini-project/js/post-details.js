
const taskScreen = document.getElementById('taskScreen');
const post = JSON.parse(new URL(location.href).searchParams.get('post'));

(showPostDetails)(post, taskScreen);
(showComments)(post.id, document.getElementById('post') );

function showPostDetails (post, elWrapper) {
    const elPost = crEl('div', 'post', 'post flxCol');
    elPost.innerHTML = `<p>Post id: <b>${post.id}</b> / (UserID: ${post.userId})</p>
                        <p>Title: <b>${post.title}</b></p>
                        <p>${post.body}</p>`;
    elWrapper.appendChild(elPost);
}


function showComments (postId, elPreceding) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            const elComments = crEl('div', 'comments', 'comments flxRow wrap flxSB');
            for (const comment of comments) {
                const elComment = crEl('div', '', 'comment dottedBorder');
                elComment.innerHTML = `<p>Comment id: <b>${comment.id}</b> (Post id: ${comment.postId}) e-mail: ${comment.email}</p>
                                        <p>Title: <b>${comment.name}</b></p>
                                        <p><i>${comment.body}</i></p>`
                elComments.append(elComment);
            }
            elPreceding.insertAdjacentElement('afterend', elComments);
        });
}
