import { Component, OnInit } from "@angular/core";
import { game } from "src/app/utilities/models/games.model";
import { GameService } from "src/app/Services/game.service";

export interface playedGame{
    name:string;
    personalRating:number
}

@Component({
    selector:'app-played-games',
    templateUrl:'./played.games.component.html',
    styleUrls:['./played.games.component.css']
})

export class PlayedGamesComponent implements OnInit{
    constructor(private gameService:GameService){}
    private playedGames:playedGame[] = [];
    isLoading:boolean=true;
    isEmpty:boolean=false;

    ngOnInit(){
        this.gameService.fetchPlayedGames().subscribe(playedGameArray => {
            if(playedGameArray.length === 0){
                this.isEmpty = true
            }
            this.isLoading=false;
            this.playedGames = playedGameArray
        })
    }
}