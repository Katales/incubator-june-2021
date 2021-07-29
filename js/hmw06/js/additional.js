
const task1Screen = document.getElementById('task1');

(showAllUsers)(task1Screen);



function showAllUsers (elWrapper) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                const elUser = crEl('div', 'user', 'user flxRow wrap flxAcrCenter');
                const elUserInfo = crEl('div', '', 'userInfo flxCol txtL');
                elUserInfo.innerHTML = `<p><b>${user.id}. ${user.name}</b> (${user.username})</p>
                                        <p>e-mail: ${user.email}</p>
                                        <p>phone: ${user.phone}</p>
                                        <p>web: ${user.website}</p>
                                        <p>company: ${user.company.name} 
                                                    (<span>${user.company.catchPhrase}</span>)</p>
                                        <p>slogan: ${user.company.bs}</p>`;
                const elUserAddr = crEl('div', '', 'userAddr flxCol txtL');
                elUserAddr.innerHTML = `<p><u>Address:</u></p>
                                        <p>${user.address.street}, str.</p>
                                        <p>apt.: ${user.address.suite}</p>
                                        <p>city: ${user.address.city}</p>
                                        <p>zip: ${user.address.zipcode}</p>
                                        <p>gps: ${user.address.geo.lat}, ${user.address.geo.lng}</p>`;
                const elButton = crEl('button', '', 'button', 'Show posts');
                elButton.onclick = () => {
                    const elPosts = document.getElementById('posts');
                    const elPostsIsNext = (elUser.nextElementSibling === elPosts);
                    if (!elPosts ) {
                        elButton.innerText = 'Hide posts';
                        showPosts(user.id, elUser);
                        return;
                    }
                    if (elPostsIsNext) {
                        elButton.innerText = 'Show posts';
                        deletePosts();
                    } else {
                        elPosts.previousElementSibling.lastElementChild.innerText = 'Show posts';
                        elButton.innerText = 'Hide posts';
                        deletePosts();
                        showPosts(user.id, elUser);
                    }
                };
                elUser.append(elUserInfo, elUserAddr, elButton);
                elWrapper.append(elUser);
            }
        });
}


function showPosts (userId, elUser) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(resp => resp.json())
        .then(resp => {
            const elPosts = crEl('div', 'posts', 'posts flxCol');
            for (const post of resp) {
                const elPost = crEl('div', '', 'post flxRow flxAcrCenter');
                const elPostTxt = crEl('div', '', 'flxCol txtJustify w100prc');
                elPostTxt.innerHTML = `<p><b>id: ${post.id}</b> / (UserID: ${post.userId})</p>
                                <p>Title: ${post.title}</p>
                                <p>${post.body}</p>`;
                const elButton = crEl('button', '', 'button bkgBeg', 'Show comments');
                elButton.onclick = () => {
                    const elComments = document.getElementById('comments');
                    const elCommentsIsNext = (elPost.nextElementSibling === elComments);
                    if (!elComments ) {
                        elButton.innerText = 'Hide comments';
                        showComments(post.id, elPost);
                        return;
                    }
                    if (elCommentsIsNext) {
                        elButton.innerText = 'Show comments';
                        deleteComments();
                    } else {
                        elComments.previousElementSibling.lastElementChild.innerText = 'Show comments';
                        elButton.innerText = 'Hide comments';
                        deleteComments();
                        showComments(post.id, elPost);
                    }
                }
                elPost.append(elPostTxt, elButton);
                elPosts.append(elPost);
            }
            elUser.insertAdjacentElement('afterend', elPosts);
        } );
}


function deletePosts () {
    const elPosts = document.getElementById('posts');
    if (elPosts) elPosts.remove();
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