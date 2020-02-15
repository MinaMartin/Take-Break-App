import {Component, OnInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GameService } from "src/app/Services/game.service";
import { HttpClient } from "@angular/common/http";
import { game } from "src/app/utilities/models/games.model";

@Component({
    selector:"app-edit-games",
    templateUrl:"./edit.games.component.html",
    styleUrls:["./edit.games.component.css"]
})

export class EditGamesComponent implements OnInit{

    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private gameService:GameService){}

    private GAME:game={name:'',releaseYear:0,price:0,category:'',rating:0};
    private Id:string;
    private http:HttpClient;
    isLoading:boolean;

    ngOnInit(){
        this.isLoading = true;

        //console.log(this.route)
        this.Id= this.route.snapshot.params['id'];

        this.gameService.fetchOneGame(this.Id).subscribe(Game => {
            this.isLoading = false;
            this.GAME.name=Game.name;
            this.GAME.category=Game.category;
            this.GAME.price=Game.price;
            this.GAME.releaseYear=Game.releaseYear;
            this.GAME.rating=Game.rating;
            //console.log(this.GAME)
        },err => {
            console.log(err)
        })

    }

    onSubmitHandler(EditForm:NgForm){
        //console.log(EditForm.value);
        this.gameService.EditGame(this.Id,EditForm.value).subscribe(response => {
            //console.log(response)
            this.router.navigate(["/games"]);
        },err => {
            console.log(err)
        })
    }
}