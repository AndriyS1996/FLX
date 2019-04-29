import UserTableComponent from './users_table';

function LoadButtonComponent(store) {
    this.createClickOnLoad = function(user_table) {
        let btn_load = document.getElementsByClassName('load')[0];

        btn_load.onclick = function() {
            let input = document.getElementsByClassName('search-by-name')[0];
            let amountShowedUsers = document.getElementsByClassName('user-table-info').length;
            let users = store.getState();
            let filtredUsers = users.filter((user) => user.name.indexOf(input.value) !== -1);
            let len = filtredUsers.length;
            if ((len - amountShowedUsers) >= 5) {
                for (let i = amountShowedUsers; i < amountShowedUsers + 5; i++) {
                    new UserTableComponent(store).createOneUser(user_table, filtredUsers[i]);
                };
            } else if ((len - amountShowedUsers) >= 0) {
                for (let i = amountShowedUsers; i < len; i++) {
                    new UserTableComponent(store).createOneUser(user_table, filtredUsers[i]);
                }
                document.getElementsByClassName('load-button')[0].style.display = 'none';
            }
            new UserTableComponent(store).changeLoadInfos(filtredUsers);
        };
    };
}
export default LoadButtonComponent;