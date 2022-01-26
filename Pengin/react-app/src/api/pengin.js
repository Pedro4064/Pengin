const BASE_API_URL = 'http://localhost:7000/';

export async function get_user_data() {
    const response = await fetch(BASE_API_URL + 'getUser');
    const json_response = await response.json();

    console.log(json_response);
    return json_response;

}

export async function add_manga_favorite(manga_id) {
    const response = await fetch(BASE_API_URL + 'AddReading/' + manga_id);
    return response;

}