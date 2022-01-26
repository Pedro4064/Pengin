import { useState } from "react";
import { get_overall_data } from "../api/mangadex";


export default function useMangaData(default_value) {
    const [mangaData, setMangaData] = useState(default_value);
    const setRawData = async (raw_data) => {
        var fetched_data = Promise.all(raw_data['favorite_manga'].map(get_overall_data));
        console.log('FETCHED DATA', fetched_data);

        setMangaData(await fetched_data);
    }

    return [mangaData, setRawData];

}