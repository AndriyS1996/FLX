
export default function UserTableComponent(store) {
    this.users = store.getState();
    function showNextUser(table, users) {
        let noUsers = document.getElementsByClassName('no-users')[0];
        let unShowedUsers = users.length - document.getElementsByClassName('user-table-info').length;
        if (unShowedUsers >= 1) {
            createUser(table, users[document.getElementsByClassName('user-table-info').length]);
        };
        if (users.length === 0) {
            noUsers.style.display = 'block';
        };
    }

    function changeLoadInfo(users) {
        let amountShowedUsers = document.getElementsByClassName('user-table-info').length;
        document.getElementsByClassName('load-info')[0].innerHTML = `Displayed ${amountShowedUsers} users out of ${users.length}`;
    }

    // create user and set remove event
    function createUser(userTable, user, users) {
        let user_info = document.createElement('div');
        user_info.className = 'user-table-info';
        user_info.innerHTML = ` <div class="foto"><img src=${user.picture} alt="ava"></div>
                                <div class="name">${user.name}</div>
                                <div class="adress">${user.location}</div>
                                <div class="email">${user.email}</div>
                                <div class="phone-number">${user.phone}</div>
                                <div class="timezone">${user.timezone}</div>`;
        let btn_remove = document.createElement('div');
        btn_remove.className = 'btn-remove';
        let remove = document.createElement('div');
        remove.className = 'remove';
        remove.innerText = 'Remove';
        remove.addEventListener('click', function(e) {
            // set remove event only created users and keep track what user entered in input section
            let input = document.getElementsByClassName('search-by-name')[0];
            let target = e.target;
            let user_info = target.closest('.user-table-info');
            store.dispatch({type: 'REMOVE', name: user_info.getElementsByClassName('name')[0].innerText});
            user_info.remove();
            let users = store.getState();
            let filtredUsers = users.filter((user) => user.name.indexOf(input.value) !== -1);
            showNextUser(userTable, filtredUsers);
            changeLoadInfo(filtredUsers);
        });
        btn_remove.appendChild(remove);
        user_info.appendChild(btn_remove);
        userTable.appendChild(user_info);
    };
    // created the public functions to use them in other components
    this.changeLoadInfos = changeLoadInfo;
    this.createList = function(userTable, users) {
        for (let i = 0; i < 5; i++) {
            createUser(userTable, users[i], users);
        };
        changeLoadInfo(users);
    };
    this.createOneUser = function(userTable, user, users) {
        createUser(userTable, user, users);
    };
    this.showHiddenUser = function(table, users) {
        showNextUser(table, users);
    };
}
