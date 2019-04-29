import UserTableComponent from './users_table';

function SearchByNameComponent(store) {
    let input = document.getElementsByClassName('search-by-name')[0];
    let userTableComponent = new UserTableComponent(store);

    this.setInputEvent = function(userTable) {
        let noUsers = document.getElementsByClassName('no-users')[0];

        input.oninput = function() {
            noUsers.style.display = 'none';
            let users = store.getState();

            // set empty user table and fill it by filtred users
            document.getElementsByClassName('users-table')[0].innerHTML = '';
            let filtredUsers = users.filter((user) => user.name.indexOf(input.value) !== -1);
            if (filtredUsers.length >= 5 ) {
                userTableComponent.createList(userTable, filtredUsers, filtredUsers);
                document.getElementsByClassName('load-button')[0].style.display = 'block';
            } else if (filtredUsers.length !== 0) {
                for (let i = 0; i < filtredUsers.length; i++) {
                    userTableComponent.createOneUser(userTable, filtredUsers[i], filtredUsers);
                };
            } else {
                noUsers.style.display = 'block';
                document.getElementsByClassName('load-button')[0].style.display = 'none';
            }
            // changes info about displayed users
            userTableComponent.changeLoadInfos(filtredUsers);
        };
    };
}
export default SearchByNameComponent;