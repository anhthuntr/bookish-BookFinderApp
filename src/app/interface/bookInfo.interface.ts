import { bookDetails } from "./bookDetails.interface";
import { accessInfo } from "./accessInfo.interface";
import { saleInfo } from "./saleInfo";
import { searchInfo } from "./searchInfo.interface";

export interface BookInfo {
    accessInfo: accessInfo;
    saleInfo: saleInfo;
    searchInfo: searchInfo;
    volumeInfo: bookDetails;
}