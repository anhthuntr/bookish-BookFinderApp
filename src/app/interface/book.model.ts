export class Book {
    title: string;
    infoLink: string;
    imageLinks: string;

    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || null;
    }
    // Add other properties as needed (e.g., description, coverImage, etc.)
  }