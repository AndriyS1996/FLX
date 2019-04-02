let users;
let cat;

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/', true);

xhr.send(); 

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;


  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    users = JSON.parse(xhr.responseText);

    //add users and randoms cats

        let users_info = document.getElementById('users_info');

        users.forEach(user => {

            fetch('https://api.thecatapi.com/v1/images/search')
            .then(function(response) {
                return response.json();
            })
            .then(function(cats) {
                cat = cats;
                users_info.innerHTML += ` <div class="user">
                                            <div class="user-content">
                                                    <div class="user-content-1">
                                                        <div class="user-avatar">
                                                            <img src="${cat[0].url}" alt="cat">
                                                        </div>
                                                        <div class="user-name"><h4>${user.name}</h4></div>
                                                    </div>
                                                    <div class="user-content-2">
                                                        <div class="user-address">
                                                        <div class="user-id">${user.id}</div>
                                                        <h4>Address:</h4>
                                                            <ul>
                                                                <li class="user-address-street"><b>street:</b> ${user.address.street}</li>
                                                                <li class="user-address-suite"><b>suite:</b> ${user.address.suite}</li>
                                                                <li class="user-address-city"><b>city:</b> ${user.address.city}</li>
                                                                <li class="user-address-zipcode"><b>zipcode:</b> ${user.address.zipcode}</li>
                                                                <li class="user-address-geo"><b>geo:</b> lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</li>
                                                            </ul>
                                                        </div>
                                                        <div class="user-phone"><b>phone:</b> ${user.phone}</div>
                                                        <div class="user-website"><b>website:</b><a href="#"> ${user.website}</a></div>
                                                        <div class="user-company-name"><b>Company:</b> ${user.company.name}</div>
                                                    </div>
                                            </div>
                                            <div class="user-edit-delete">
                                                <button class="user-edit">Edit</button>
                                                <button class="user-delete">Delete</button>
                                            </div>
                                        </div>`
                
                })
            });
        }

    }


let edit = document.getElementsByClassName('user-edit');
let modal = document.getElementById('myModal');
let close = document.getElementsByClassName('close')[0];
let close1 = document.getElementsByClassName('close1')[0];
let submit = document.getElementById('submit');
let modal1 = document.getElementById('myModall');
let modalContent1 = document.getElementsByClassName('modal1-content')[0];
let user_id;

// button edit and delete

users_info.onclick = function(event){
    let target = event.target;

    //Edit

    if ((target.closest('.user-edit'))){
        let user_elem = target.parentElement.parentElement; 
        user_id = +user_elem.getElementsByClassName('user-id')[0].textContent
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === user_id){
                document.getElementById('_street').value = users[i].address.street;
                document.getElementById('_suite').value = users[i].address.suite;
                document.getElementById('_city').value = users[i].address.city;
                document.getElementById('_zipcode').value = users[i].address.zipcode;
                document.getElementById('_geo_lat').value = users[i].address.geo.lat;
                document.getElementById('_geo_lng').value = users[i].address.geo.lng;
                document.getElementById('_phone').value = users[i].phone;
                document.getElementById('_website').value = users[i].website;
                document.getElementById('_company').value = users[i].company.name;
            }
        }
        modal.style.display = 'block';
    }

    //Delete

    if ((target.closest('.user-delete'))){
        let user_elem = target.parentElement.parentElement; 
        user_id = +user_elem.getElementsByClassName('user-id')[0].textContent
        let url = "https://jsonplaceholder.typicode.com/users/";
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", url + user_id, true);
        xhr.onload = function () {
        let users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        user_elem.remove();
    }

    if ((target.closest('.user-name'))){
        let user_elem = target.parentElement.parentElement.parentElement; 
        user_id = +user_elem.getElementsByClassName('user-id')[0].textContent
        let posts;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

        xhr.send(); 

        xhr.onreadystatechange = function() { 
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
               posts = JSON.parse(xhr.responseText);
               console.log(posts);
               for (let i = 0; i < posts.length; i++) {
                  if (posts[i].userId === user_id){
                      modalContent1.innerHTML += `<p>post ${posts[i].id}:  ${posts[i].body}`
                  }
               }
            }
        }
        modal1.style.display = 'block';
    }
}

close.onclick = function(){
    modal.style.display = 'none';
}
close1.onclick = function(){
    modal1.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    if (event.target === modal1) {
        modal1.style.display = "none";
      }
  }


// Submit

submit.onclick = function(){
    let user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === user_id){
                user = users[i];
            }
        }
    let street = document.getElementById('_street').value;
    let suite = document.getElementById('_suite').value;
    let city = document.getElementById('_city').value;
    let zipcode = document.getElementById('_geo_lat').value;
    let geo_lat = document.getElementById('_geo_lat').value;
    let geo_lng = document.getElementById('_geo_lng').value;
    let phone = document.getElementById('_phone').value;
    let website = document.getElementById('_website').value;
    let company = document.getElementById('_company').value;

    document.getElementsByClassName('user-address-street')[0].innerHTML = `<b>street:</b> ${street}`;
    document.getElementsByClassName('user-address-suite')[0].innerHTML = `<b>suite:</b> ${suite}`;
    document.getElementsByClassName('user-address-city')[0].innerHTML = `<b>city:</b> ${city}`;
    document.getElementsByClassName('user-address-zipcode')[0].innerHTML = `<b>zipcode:</b> ${zipcode}`;
    document.getElementsByClassName('user-address-geo')[0].innerHTML = `<b>geo:</b> lat: ${geo_lat}, lng: ${geo_lng}`;
    document.getElementsByClassName('user-phone')[0].innerHTML = `<b>phone:</b> ${phone}`;
    document.getElementsByClassName('user-website')[0].innerHTML = `<b>website:</b><a href="#"> ${website}</a>`
    document.getElementsByClassName('user-company-name')[0].innerHTML = `<b>company:</b> ${company}`;

    modal.style.display = 'none';

    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`, {
    method: 'PUT',
    body: JSON.stringify({
        "id": user_id,
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "address": {
          "street": street,
          "suite": suite,
          "city": city,
          "zipcode": zipcode,
          "geo": {
            "lat": geo_lat,
            "lng": geo_lng
          }
        },
        "phone": phone,
        "website": website,
        "company": {
          "name": company,
          "catchPhrase": user.catchPhrase,
          "bs": user.bs
        }
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
 }
