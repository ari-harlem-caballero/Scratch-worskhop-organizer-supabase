import { deleteMember } from '../fetch-utils.js';
import { displayClubs } from './clubs.js';

export function renderMember(member) {
    const singleMember = document.createElement('p');
            
    singleMember.classList.add('member');
    singleMember.textContent = member.name;
            //event!! on click: delete member, re-render/call displayClubs
    singleMember.addEventListener('click', async() => {
        await deleteMember(member.id);
                
        displayClubs();
    });

    return singleMember;
}