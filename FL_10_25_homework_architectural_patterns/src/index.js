import './style.scss';

// ** Here you can pass store down to your components
// ** and initialize them, like in example below

import {createStore} from 'redux';
import Reducer from './reducers/reducer';
import UserTableComponent from './components/users_table.js';
import LoadButtonComponent from './components/load_button';
import SearchByNameComponent from './components/search';

const store = createStore(Reducer);

document.getElementById('root').innerHTML = `<div class="search-box">
                                                <div class="search-box-by-name">
                                                    <div class="search-description">
                                                        <p>Search by name:</p>
                                                    </div>
                                                    <div class='search-wrapper'>
                                                        <input type="text" class="search-by-name" value="">
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="user-table-wrapper">
                                                <div class="user-table-head">
                                                    <div class="foto">Photo</div>
                                                    <div class="name">Name</div>
                                                    <div class="address">Address</div>
                                                    <div class="email">Email</div>
                                                    <div class="phone-number">Phone number</div>
                                                    <div class="timezone">Timezone</div>
                                                    <div class="btn-remove">Actions</div>
                                                </div>
                                                <div class="users-table">

                                                </div>
                                                    <div class="no-users">No User Are Found</div>
                                                </div>
                                                <div class="load">
                                                    <div class="load-info">None</div>
                                                <button class="load-button">Load More</button>
                                            </div>`;

const usersComponent = new UserTableComponent(store);
const loadComponent = new LoadButtonComponent(store);
const searchByName = new SearchByNameComponent(store);

let usersTable = document.getElementsByClassName('users-table')[0];

usersComponent.createList(usersTable, store.getState());

loadComponent.createClickOnLoad(usersTable);

searchByName.setInputEvent(usersTable);

console.log(store.getState());

