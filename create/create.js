import { checkAuth, createMember, getClubs, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const createForm = document.querySelector('form');

logoutButton.addEventListener('click', () => {
    logout();
});

//form (create new member)
createForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(createForm);
    //create data.get('name', 'club_id')
    const name = data.get('member-name');
    const club_id = data.get('clubs');
    //newObj (name, club_id) --> await createMember
    await createMember({
        name,
        club_id
    });

    window.location.href = '../clubs';
});

//load (dropdown, loop thru clubs)
window.addEventListener('load', async() => {
    //create dropdown (querySelector)
    const dropdown = document.querySelector('select');
    //create booger = await getClubs
    const clubs = await getClubs();
        //loop (1 club of clubs)
    for (let club of clubs) {
        //create option
        const optionElem = document.createElement('option');
        //(.value = computers view: id)
        optionElem.value = club.id;
        //(.tCont = user view: name)
        optionElem.textContent = club.name;
        //append 1 club to dropdown
        dropdown.append(optionElem);
    }

});