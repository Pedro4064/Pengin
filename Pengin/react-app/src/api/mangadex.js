export default async function search_manga(manga_title) {
    const BASE_URL = `https://api.mangadex.org/manga?title=${manga_title}&limit=100`;
    const response = await fetch(BASE_URL);
    const response_json = await response.json();

    return Promise.all(response_json['data'].map(parse_data));
}

const parse_data = async (api_response) => {
    let manga_data = { Title: '', Id: '', Description: '', Status: '', Tags: [], CoverUrl: '' };

    manga_data.Title = api_response['attributes']['title']['en'];
    manga_data.Id = api_response['id'];
    manga_data.Description = api_response['attributes']['description']['en'];
    manga_data.Status = api_response['attributes']['status'];
    manga_data.Tags = get_tags(api_response['attributes']['tags']);
    manga_data.CoverUrl = await get_cover(api_response['relationships'], manga_data.Id);

    console.log(manga_data);
    return manga_data;

}

const get_tags = (tags_data) => {
    let tags = [];
    tags_data.map((tag) => { tags.push(tag['attributes']['name']['en']) });

    return tags;

}

const get_cover = async (api_relationships, manga_id) => {

    var cover_id = api_relationships.filter((relation) => { if (relation['type'] === 'cover_art') { return true } })[0]['id'];
    const BASE_URL = `https://api.mangadex.org/cover?ids[]=${cover_id}`
    const response = await fetch(BASE_URL);
    const response_json = await response.json()
    const cover_name = response_json['data'][0]['attributes']['fileName']
    return `https://uploads.mangadex.org/covers/${manga_id}/${cover_name}.256.jpg`
}