import { Component, Input } from "@angular/core";

import { GameService } from "src/app/Services/game.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";



@Component({
    selector:"app-add-game",
    templateUrl:"./add.games.component.html",
    styleUrls:["./add.games.component.css"]
})

export class AddGameComponent{

    constructor(private gameService:GameService,
        private router:Router,
        private route:ActivatedRoute){}

    onSubmitHandler(form:NgForm){
        this.gameService.AddGame(form.value).subscribe(response => {
            //console.log(response)
            this.router.navigate(["/games"]);
        },err => {console.log(err)})
    }
} 
