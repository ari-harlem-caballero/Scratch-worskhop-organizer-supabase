import { checkAuth, deleteMember, getClubs, logout } from '../fetch-utils.js';

checkAuth();

const clubListElem = document.querySelector('.clubs-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

//on load: fetch/display all clubs
window.addEventListener('load', async() => {
    displayClubs();
});

async function displayClubs() {
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
        console.log(club);
        for (let member of club.create_member) {
            //member createElem/classList/tCont
            const singleMember = document.createElement('p');
            
            singleMember.classList.add('member');
            singleMember.textContent = member.name;
            //event!! on click: delete member, re-render/call displayClubs
            singleMember.addEventListener('click', async() => {
                await deleteMember(member.id);
                
                displayClubs();
            });

            //append single member -> members(aka line 26)
            membersElem.append(singleMember);
        }
        
        //-- render/append clubs to container
        clubListElem.append(clubDiv);
    }

}