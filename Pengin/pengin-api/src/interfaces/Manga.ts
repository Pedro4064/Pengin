import { Volume } from './Volume';

interface Manga {
    title: String,
    alt_title?: String,
    id: String,
    cover_url?: URL,
    cover_thumbnail_url?: URL,
    volumes?: Array<Volume>
}