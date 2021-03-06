const SUPABASE_URL = 'https://iukatvxufexnxiynajvf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTk0NjA4NCwiZXhwIjoxOTU3NTIyMDg0fQ._oM62GVShTLjkWzf09TVA81CQzDnnOrffIuxnilNVFc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function getClubs() {
    const response = await client
        .from('clubs')
        .select(`*, create_member (*)`);

    return response.data;
}

export async function createMember(name) {
    const response = await client
        .from('create_member')
        .insert(name);

    return response.data;
}

export async function deleteMember(club_id) {
    const response = await client
        .from('create_member')
        .delete()
        .match({ id: club_id })
        .single();

    return response.data;
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./clubs');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
