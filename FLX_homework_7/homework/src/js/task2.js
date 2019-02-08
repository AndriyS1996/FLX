
if (confirm('Do you want to play a game')){
    let attemps = 3;
    let first_attemp_prize = 10;
    let pos_prize = 10;
    let exit = false;
    let range = 6;
    let total_prize = 0;

    // Step 2

    while (!exit){
        let win_number = Math.floor(Math.random() * range);

        // Step 3

        while (attemps !== 0) {
            let user_number = prompt(`
                                Enter a number from 0 to ${range - 1}\n
                                Attemps left: ${attemps}\n
                                Total prize: ${total_prize}\n
                                Possible prize on current attempt: ${pos_prize}
                            `,'');
            if (user_number === null) {
                break
            }
            user_number = +user_number;
            if (user_number === win_number){
                total_prize += pos_prize;
                if (!confirm(`Congratulation! Your prize is: ${total_prize}. Do you want to continue?`)){
                    break
                }
                first_attemp_prize *= 3
                pos_prize = first_attemp_prize;
                range = range * 2 - 1;
                attemps = 3;
                win_number = Math.floor(Math.random() * range);
            } else {
                pos_prize = Math.floor(pos_prize / 2);
                attemps--;
            }
        }

        alert(`Thank you for a game. Your prize is: ${total_prize}`);
        if (confirm('Do you want to play again?')){
            attemps = 3;
            first_attemp_prize = 10;
            pos_prize = 10;
            range = 6;
            total_prize = 0;
        } else {
            exit = true;
        }
    }
} else {
    alert('You did not become a millionaire, but can.')
}