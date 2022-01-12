import { checkAuth, logout } from '../fetch-utils.js';

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
    //data.get('name', 'club_id')
    //newObj (name, club_id) --> await createMember
    //window.location.href = '../clubs';
});

//load (dropdown, loop thru clubs)
//create dropdown (querySelector)
//create booger = await getClubs
    //loop (1 club of clubs)
    //create option (& .value, .tCont)
    //append 1 club to dropdown