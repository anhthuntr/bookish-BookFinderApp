import { Author } from "./author.interface";
import { Image } from "./image.interface";

export interface bookDetails {
    title: string;
    authors: Author[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: string;
    averageRating: string;
    imageLinks: Image;
    language: string;
    previewLink: string;
    infoLink: string;
}