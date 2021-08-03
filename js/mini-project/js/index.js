
const taskScreen = document.getElementById('taskScreen');

(showUserList)(taskScreen);


async function showUserList (elWrapper) {
    const usersLSisEmpty = !(localStorage.getItem(nameLS) || '').trim();
    const users = usersLSisEmpty
                    ? await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(resp => resp.json())
                    : JSON.parse(localStorage.getItem(nameLS));

    const elUsers = crEl('div', 'users', 'users flxRow wrap')
    for (const user of users) {
        const elUser = crEl('div', 'user', 'user flxCol');
        const elUserBasicInfo = crEl('div', '', 'flxCol txtL');
        elUserBasicInfo.innerHTML = `<p>id:<b>${user.id}.</b> Name: <b>${user.name}</b></p>`;

        const elButton = crEl('button', '', 'button', 'More info ...');
        elButton.onclick = () => {
            open(`./user-details.html?user=${JSON.stringify(user)}`, '_self');
        };
        elUser.append(elUserBasicInfo, elButton);
        elUsers.append(elUser);
    }
    elWrapper.append(elUsers);

    localStorage.setItem(nameLS, JSON.stringify(users));
}
