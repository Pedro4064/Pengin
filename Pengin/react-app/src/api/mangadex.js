export default async function search_manga(manga_title) {
    const BASE_URL = `https://api.mangadex.org/manga?title=${manga_title}&limit=100`;
    const response = await fetch(BASE_URL);
    const response_json = await response.json();

    return Promise.all(response_json['data'].map(parse_data));
}

export async function get_manga_data(manga_id) {
    var manga_data = { 'Manga info': {}, 'Volumes Data': {} };
    var data = await get_overall_data(manga_id);
    var volumes_data = await get_volumes_data(manga_id);

    Promise.all([data, volumes_data]);
    manga_data['Manga info'] = data;
    manga_data['Volumes Data'] = volumes_data;

    console.log('MANGA DATA:', manga_data);
    return manga_data;

}

const get_overall_data = async (manga_id) => {
    const BASE_URL = `https://api.mangadex.org/manga/${manga_id}`;
    const response = await fetch(BASE_URL);
    const response_json = await response.json();

    return parse_data(response_json['data']);
}

const get_volumes_data = async (manga_id) => {
    const BASE_VOLUMES_URL = `https://api.mangadex.org/manga/${manga_id}/aggregate`;
    const volumes_response = await fetch(BASE_VOLUMES_URL);
    var volumes_json = await volumes_response.json();

    const BASE_COVERS_URL = `https://api.mangadex.org/cover?order[volume]=asc&manga[]=${manga_id}&limit=100`;
    const covers_response = await fetch(BASE_COVERS_URL);
    var covers_json = await covers_response.json();

    return merge_volumes_covers_data(manga_id, volumes_json, covers_json);
}

const merge_volumes_covers_data = (manga_id, volumes_json, covers_json) => {
    volumes_json = volumes_json['volumes'];
    covers_json = covers_json['data'];

    //! WE NEED TO ADD A PLACEHOLDER COVER FOR THE CHAPTERS THAT DONT HAVE RATHER THAN FILTERING THEM
    console.log('MERGING DATA', covers_json, volumes_json);
    covers_json = covers_json.filter((entry) => { return entry['attributes']['volume'] != null });
    covers_json.map((entry) => { volumes_json[entry['attributes']['volume']]['CoverUrl'] = `https://uploads.mangadex.org/covers/${manga_id}/${entry['attributes']['fileName']}` });
    return volumes_json;

}

const parse_data = async (api_response) => {
    let manga_data = { Title: '', Id: '', Description: '', Status: '', Tags: [], CoverUrl: '', CoverLargeUrl: '' };

    // console.log('PARSING DATA', api_response);
    manga_data.Title = api_response['attributes']['title']['en'];
    manga_data.Id = api_response['id'];
    manga_data.Description = api_response['attributes']['description']['en'];
    manga_data.Status = api_response['attributes']['status'];
    manga_data.Tags = get_tags(api_response['attributes']['tags']);
    [manga_data.CoverUrl, manga_data.CoverLargeUrl] = await get_cover(api_response['relationships'], manga_data.Id);

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
    return [`https://uploads.mangadex.org/covers/${manga_id}/${cover_name}.256.jpg`, `https://uploads.mangadex.org/covers/${manga_id}/${cover_name}`]
}