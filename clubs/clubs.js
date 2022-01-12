import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

//on load: fetch/display all clubs
    //-- each club: loop through members
    //-- each member: render and append to club
    //-- render/append clubs to container

//on click: delete member, re-render