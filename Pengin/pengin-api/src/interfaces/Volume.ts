import { Chapter } from "./Chapter";

export interface Volume {
    name: String,
    cover_url?: URL,
    cover_thumbnail_url?: URL,
    chapters?: Array<Chapter>
}