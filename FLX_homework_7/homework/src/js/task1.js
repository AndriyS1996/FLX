let login = prompt('Enter login', '');
if (!login){
    alert('Canceled')
} else if (login.length < 4){
    alert('I dont know any users having name length less than 4 symbols');
} else if ((login === 'User') || (login === 'Admin')){
    let password = prompt('Enter password','');

    // Step 2 Check password

    if (!password){
        alert('Canceled')
    } else if ((password === 'UserPass') || (password === 'RootPass')){
        let hour = new Date().getHours();

        // Step 3 Greets

        if ((login === 'User') && (password === 'UserPass')){
            hour >= 20 ? alert('Good evening, dear User!') : alert('Good day, dear User')
        }
        if ((login === 'Admin') && (password === 'RootPass')){
            hour >= 20 ? alert('Good evening, dear Admin!') : alert('Good day, dear Admin')
        }
    } else {
        alert('Wrong password');
    }

} else {
    alert('I dont know you')
}

