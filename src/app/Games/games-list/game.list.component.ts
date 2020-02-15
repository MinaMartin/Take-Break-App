import { Component, OnInit } from "@angular/core";

import { game } from "src/app/utilities/models/games.model";

import { GameService } from "src/app/Services/game.service";

@Component({
    selector:"app-game-list",
    templateUrl:"./game.list.component.html",
    styleUrls:["./game.list.component.css"]
})

export class GameListComponent implements OnInit{
    constructor(private gameService:GameService){}

    isLoading:boolean;
    isEmpty:boolean = false;

    private games:game[];
    private AddedToPlayedListOrNot:boolean = false;
    
    ngOnInit(){
        this.isLoading=true;
        this.gameService.fetchGames().subscribe(gamesArray => {
            this.isLoading=false;
            if(gamesArray.length === 0){
                this.isEmpty=true
            }
            this.games= gamesArray
        },err => {
            console.log(err);
            this.isLoading=false;
        });
    }
}