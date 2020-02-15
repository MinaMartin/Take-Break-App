export interface game{
    name:string;
    category:string;
    releaseYear:number;
    price:number;
    rating:number;
    AddedToPlayedListOrNot?:boolean;
    personalRating?:number;
}