// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
const task1Screen = document.getElementById('task1');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(posts => {
        const elList = document.createElement('div');
        elList.classList = 'posts flxCol';
        for (const post of posts) {
            const elPost = document.createElement('div');
            elPost.classList = 'post flxCol txtJustify';
            elPost.innerHTML = `<p>Post ID: ${post.id} (UserID: ${post.userId})</p>
                            <p>Title: ${post.title}</p>
                            <p>${post.body}</p>`;
            elList.append(elPost);
        }
        task1Screen.append(elList);
} );


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
const task2Screen = document.getElementById('task2');

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(resp => resp.json())
    .then(comments => {
        const elComments = document.createElement('div');
        elComments.id = 'comments';
        elComments.classList = 'comments flxCol';
        for (const comment of comments) {
            const elComment = document.createElement('div');
            elComment.classList = 'comment dottedBorder';
            elComment.innerHTML = `<p><b># ${comment.id}</b> (PostID: ${comment.postId}), <b>Name:</b> ${comment.name}  <b>e-mail:</b> ${comment.email}</p>
                                   <p>${comment.body}</p>`
            elComments.append(elComment);
        }
        task2Screen.append(elComments);
});
