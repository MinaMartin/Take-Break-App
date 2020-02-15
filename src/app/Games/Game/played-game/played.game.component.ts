import { Component, Input, OnInit, DoCheck } from "@angular/core";
import { game } from "src/app/utilities/models/games.model";
import { playedGame } from "../played-games/played.games.component";
import { NgForm } from "@angular/forms";
import { GameService } from "src/app/Services/game.service";

@Component({
    selector:'app-played-game',
    templateUrl:'./played.game.component.html',
    styleUrls:['./played.game.component.css']
})

export class PlayedGameComponent implements OnInit,DoCheck{
    constructor(private gameService:GameService){}

    @Input() playedGame:playedGame;
    @Input() gameId:string;
    private GameId:string;
    ratedOrNot:boolean;
    ratingAdded:boolean=false;
    isLoading:boolean = false;
    rating:number;
    isEditing:Boolean;

    ngOnInit(){
        this.isLoading=true
        this.GameId=this.gameId
        this.gameService.fetchRating(this.gameId).subscribe(rating => {
            console.log(rating);
            if(rating !== -1){
                this.ratingAdded=true
            }else{
                this.ratingAdded=false
            }
            this.isLoading=false;
        })
    }

    ngDoCheck(){
        
    }


    onSubmitHandler(ratingForm:NgForm){
        this.ratingAdded=true
        this.isLoading = true;
        this.rating=ratingForm.value

        //console.log(this.GameId);
        this.gameService.AddGameRating(ratingForm.value.personalRating,this.gameId)
        .subscribe(response => {
            console.log(response);
            this.isLoading=false;
        },err => {
            console.log(err);
            this.isLoading=false;
        });
    }


}