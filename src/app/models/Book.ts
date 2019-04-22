import { Author } from "./Author";
import { Publisher } from "./Publisher";
import { Time } from "@angular/common";


export class Book {
    _id: string;
    author: Author;
    publisher: Publisher;
    name: string;
    description: string;
    genre: string;
    language: string;
    publishdate:string;
    image:string;
}