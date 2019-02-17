/* if you see such varible as thousand, Its because eslint deducted mistake 'no-magic-number*/

function userCard(key_of_card){
    return {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: key_of_card,
        getCardOptions: function(){
            return {
                balance: this.balance,
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs,
                key: this.key
            }
        },

        putCredits: function(addedCredits){
            this.balance += addedCredits;
            let date = new Date();
            let time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, 
                        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            this.historyLogs.push({operationType: 'Received credits', credits: addedCredits, operationTime: time})
        },

        takeCredits: function(subCredits){
            if (this.balance >= subCredits && this.transactionLimit >= subCredits) {
                this.balance -= subCredits;
                let date = new Date();
                let time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, 
                            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                this.historyLogs.push({operationType: 'Withdrawal of credits', credits: subCredits, 
                                        operationTime: time})
            } else {
                this.balance < subCredits ? console.error('Not enough credits') : console.error('Transaction limit');
            }
        },

        setTransactionLimit: function(limit){
            this.transactionLimit = limit;
            let date = new Date();
            let time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, 
                        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            this.historyLogs.push({operationType: 'Transaction limit change', credits: limit, operationTime: time})
        },

        transferCredits(amount, recipient){
            if (this.balance >= amount && this.transactionLimit >= amount){
                let tax_mult_1000 = 1005;
                let thousand = 1000;
                this.takeCredits(tax_mult_1000 * amount / thousand);
                recipient.putCredits(amount)
            } else {
                this.balance < amount ? console.error('Not enough credits') : console.error('Transaction limit');
            }
        }
    }
}

class UserAccount {
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    addCard(){
        let max_amount_of_cards = 3;
        if (this.cards.length < max_amount_of_cards){
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.error('You can have only 3 cards')
        }
    }
    getCardByKey(key_of_card){
        return this.cards[key_of_card - 1]
    }
}




