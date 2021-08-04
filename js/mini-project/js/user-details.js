const taskScreen = document.getElementById('taskScreen');
const user = JSON.parse(new URL(location.href).searchParams.get('user'));
localStorage.removeItem(postsLSname);

// console.log(user);
(showUserInfo)(user, taskScreen);

function showUserInfo(user, elWrapper) {
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
    const elBtnContainer = crEl('div', '', 'flxRow flxCenter')
    const elButton = crEl('button', '', 'button', 'Show the posts of current user');
    elButton.onclick = () => {
        const elPosts = document.getElementById('posts');
        if (!elPosts) {
            elButton.innerText = 'Hide the posts of current user';
            showPostTitles(user.id, elBtnContainer);
        } else {
            elButton.innerText = 'Show the posts of current user';
            deletePosts();
        }
    };
    elBtnContainer.append(elButton);
    elUser.append(elUserInfo, elUserAddr);
    elWrapper.append(elUser);
    elUser.insertAdjacentElement('afterend', elBtnContainer);
}

async function showPostTitles(userId, elPreceding) {
    const postsLSisEmpty = !((localStorage.getItem(postsLSname) || '').trim());
    const posts = postsLSisEmpty
        ? await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(resp => resp.json())
        : JSON.parse(localStorage.getItem(postsLSname));
    if (postsLSisEmpty)
        localStorage.setItem(postsLSname, JSON.stringify(posts));
    const elPosts = crEl('div', 'posts', 'posts flxRow wrap flxSB');
    for (const post of posts) {
        const elPost = crEl('div', '', 'post flxCol flxSB');
        const elPostTxt = crEl('div');
        elPostTxt.innerHTML = `<p>Title: <b>${post.title}</b></p>`;
        const elButton = crEl('button', '', 'button txtL bkgBeg', 'Go to post');
        elButton.onclick = () => {
            open(`./post-details.html?post=${JSON.stringify(post)}`, '_self');
        }
        elPost.append(elPostTxt, elButton); // ?post=${JSON.stringify(post)}
        elPosts.append(elPost);
    }
    elPreceding.insertAdjacentElement('afterend', elPosts);
}


function deletePosts() {
    const elPosts = document.getElementById('posts');
    if (elPosts) elPosts.remove();
}
