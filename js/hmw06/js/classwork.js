
const task1Screen = document.getElementById('task1');

(showPosts)();

function showPosts () {
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(resp => {
        const elList = document.createElement('div');
        elList.classList = 'posts flxCol';
        for (const post of resp) {
            const elPost = document.createElement('div');
            elPost.classList = 'post flxRow flxAcrCenter';
            const elPostTxt = document.createElement('div');
            elPostTxt.classList = 'flxCol txtJustify w100prc';
            elPostTxt.innerHTML = `<p>UserID: ${post.userId} / id: ${post.id}</p>
                                <p>Title: ${post.title}</p>
                                <p>${post.body}</p>`;
            const elButton = document.createElement('button');
            elButton.classList = 'button bkgBeg';
            elButton.innerText = 'Show comments';
            elButton.onclick = () => {
                deleteComments();
                showComments(post.id, elPost);
            }
            elPost.append(elPostTxt, elButton);
            elList.append(elPost);
        }
        task1Screen.append(elList);
    } );
}

function showComments (postId, elPost) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            const elComments = document.createElement('div');
            elComments.id = 'comments';
            elComments.classList = 'comments flxCol';
            for (const comment of comments) {
                const elComment = document.createElement('div');
                elComment.classList = 'comment dottedBorder';
                elComment.innerHTML = `<p># ${comment.id}, Name: ${comment.name}  e-mail: ${comment.email}</p>
                                       <p>${comment.body}</p>`
                elComments.append(elComment);
            }
            elPost.insertAdjacentElement('afterend', elComments);
        });
}


function deleteComments () {
    const elComments = document.getElementById('comments');
    if (elComments) elComments.remove();
}