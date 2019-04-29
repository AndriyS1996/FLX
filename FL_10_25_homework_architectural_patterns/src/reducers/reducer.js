import userss from '../data';

export default function reducer(users = userss, action) {
    switch (action.type) {
    case 'REMOVE':
        return users.filter((user) => user.name !== action.name);
    case 'SEARCH':
        return users.filter((user) => user.name.indexOf(action.input) !== -1);
    default:
        return users;
    }
}
