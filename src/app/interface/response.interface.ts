import { BookInfo } from "./bookInfo.interface";

export interface BookApiResponse {
    totalItems: string;
    items: BookInfo[];
}