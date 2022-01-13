import { checkAuth, getClubs, logout } from '../fetch-utils.js';

import { renderMember } from './render-utils.js';


checkAuth();

const clubListElem = document.querySelector('.clubs-container');
const logoutButton = document.getElementById('logout');
const addMemberButton = document.getElementById('add-member');

logoutButton.addEventListener('click', () => {
    logout();
});

addMemberButton.addEventListener('click', () => {
    window.location.href = '../create';
});

//on load: fetch/display all clubs
window.addEventListener('load', async() => {
    displayClubs();
});

export async function displayClubs() {
    //-- fetch clubs (const/await)
    const clubs = await getClubs();
    //-- clear list
    clubListElem.textContent = '';
    //-- each club: loop through members (aka renderFunc)
    for (let club of clubs) {
        //create elems (div, name, members)
        const clubDiv = document.createElement('div');
        const nameElem = document.createElement('h3');
        const membersElem = document.createElement('div');
        //classlists (div/members)
        clubDiv.classList.add('club-hold');
        membersElem.classList.add('members-hold');
        //tCont (name)
        nameElem.textContent = club.name;
        //-- each member: render and append to club
        clubDiv.append(nameElem, membersElem);

        for (let member of club.create_member) {
            console.log(member);
            //member createElem/classList/tCont
            const singleMember = renderMember(member);
            //append single member -> members(aka line 26)
            membersElem.append(singleMember);
        }
        
        //-- render/append clubs to container
        clubListElem.append(clubDiv);
    }

}