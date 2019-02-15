// 1. findTypes

function findTypes(){
    let types = [];
    for (let i = 0; i < arguments.length; i++) {
        types.push(typeof arguments[i]);
    }
    return types
}
alert(findTypes('number', 'fs', null, {date: 'fas'}, new Date()));

// 2. executeforEach

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1, 'str'], function(el){
    return console.log(el);
});

// 3. mapArray

function mapArray(arr, func) {
    let map_arr = [];
    executeforEach(arr, function(el){
        map_arr.push(func(el))
    })
    return map_arr
}

alert(mapArray([3,5,7], function(el){
    return el - 4
}))

// 4. filterArray

function filterArray(arr, func) {
    let filtered_arr = [];
    executeforEach(arr, function(el){
        if (func(el)){
            filtered_arr.push(el);
        }
    })
    return filtered_arr;
}

alert(filterArray([2, 5, 8], function(el){
        return el > 3 
    }));

// 5, 6. 

let clients = [
   
         {
            "_id": "5b5e3168c6bf40f2c1235cd6",
            "index": 0,
            "age": 39,
            "eyeColor": "green",
            "name": "Stein",
            "favoriteFruit": "apple"
            },
            {
            "_id": "5b5e3168e328c0d72e4f27d8",
            "index": 1,
            "age": 38,
            "eyeColor": "blue",
            "name": "Cortez",
            "favoriteFruit": "strawberry"
            },
            {
            "_id": "5b5e3168cc79132b631c666a",
            "index": 2,
            "age": 2,
            "eyeColor": "blue",
            "name": "Suzette",
            "favoriteFruit": "apple"
            },
            {
            "_id": "5b5e31682093adcc6cd0dde5",
            "index": 3,
            "age": 19,
            "eyeColor": "green",
            "name": "George",
            "favoriteFruit": "banana"
            }
        ]

// 5. getAmountOfAdultsPeople

function getAmountOfAdultPeople(clients) {
    return filterArray(clients, function(el){
                return el["age"] >= 18
            }).length
}
alert(getAmountOfAdultPeople(clients));

// 6. getGreenAdultsBananaLovers

function getGreenAdultsBananaLovers(clients) {
    let adults_clients = filterArray(clients, function(el){
        return el["age"] >= 18
    });
    let adults_green_clients = filterArray(adults_clients, function(el){
        return el["eyeColor"] === "green"
    })
    let adults_green_clients_lovebanana = filterArray(adults_green_clients, function(el){
        return el["favoriteFruit"] === "banana"
    });

    return mapArray(adults_green_clients_lovebanana, function(el){
        return el["name"]
    })
}

alert(getGreenAdultsBananaLovers(clients));

// 7. keys of Object

function keys(object) {
    let keys = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key)
        }
    }
    return keys;
}

alert(keys({keyOne: 1, keyTwo: 2, keyThree: 3}) )

// 8. key values of object

function values(object) {
    let values = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key])
        }
    }
    return values;
}

alert(values({keyOne: 1, keyTwo: 2, keyThree: 3}) )

// 9. showFormattedDate

function showFormattedDate(date) {
    let options = {
        month: 'short',
    };
    return 'Date: ' + date.getDate() + ' of ' + date.toLocaleString("en-US", options) + ', ' + date.getFullYear()
}

alert(showFormattedDate(new Date('2019-01-27T01:10:00')) )

// 10. IsEvenYear

function isEvenYear(date) {
    if (date.getFullYear() % 2 === 0){
        return true
    } else {
        return false
    }
}

alert(isEvenYear(new Date('2018-01-27T01:10:00')))

// 11. isEvenMonth

function isEvenMonth(date) {
    if ((date.getMonth() + 1) % 2 === 0){
        return true
    } else {
        return false
    }
}
alert(isEvenMonth(new Date('2018-02-27T01:10:00')))