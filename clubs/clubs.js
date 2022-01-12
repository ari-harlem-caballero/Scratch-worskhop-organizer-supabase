import { checkAuth, getClubs, logout } from '../fetch-utils.js';

checkAuth();

const clubListElem = document.querySelector('.clubs-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

//on load: fetch/display all clubs
window.addEventListener('load', async() => {
    const clubs = await getClubs();

    displayClubs(clubs);
});

async function displayClubs() {
    //-- fetch clubs (const/await)
    const clubs = await getClubs();
    //-- clear list
    clubListElem.textContent = '';
    //-- each club: loop through members (aka renderFunc)
    for (let club of clubs) {
        //create elems (div, name, members)
        //classlists (div/members)
        //tCont (name)

        //-- each member: render and append to club
        for (let member of /*booger.create_members*/) {
            //member createElem/classList/tCont

            //event!! on click: delete member, re-render/call displayClubs

            //append single member -> members(aka line 26)
        }

        //-- render/append clubs to container
    }

}