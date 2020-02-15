import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import {game} from "../../utilities/models/games.model";
import { GameService } from "src/app/Services/game.service";

@Component({
    selector:"app-game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"]
})

export class GameComponent implements OnInit{

    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private gameService:GameService){}

    
    private AddedToPlayedListOrNot:boolean;

    @Input() Game:game ;
    @Input() PlayedListOrNot:boolean;

    ngOnInit(){
        this.AddedToPlayedListOrNot = this.PlayedListOrNot;
    }

    onEditGame(id:string){
        this.router.navigate(['/games','edit-game',id],{relativeTo:this.route})
    }

    onRemoveGame(id:string){
        confirm("Remove this Game");
        this.gameService.RemoveGame(id);
    }

    onAddToPlayedList(name:string,id:string){
        this.gameService.changeGamePlayedOrNotState(id).subscribe(response => {
            console.log(response);
        },err => {
            console.log(err);
        })
    }

}