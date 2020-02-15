import { Router } from "@angular/router";
import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"
import {map, exhaustMap} from "rxjs/operators";

import { game } from "../utilities/models/games.model";
import { AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";


@Injectable({providedIn:"root"})

export class GameService {

    constructor(
        private http:HttpClient,
        private router:Router,
        private authService:AuthService){}


        private userId:string = JSON.parse(localStorage.getItem('userData')).id;

    AddGame(gameData:game){
        return this.http.post(`https://angular-26531.firebaseio.com/User_${this.userId}/Games.json`,
        {...gameData,AddedToPlayedListOrNot:false,personalRating:-1})
    }

    fetchGames(){
        //console.log(this.userId);
        this.userId = JSON.parse(localStorage.getItem('userData')).id;
        return this.http.get(`https://angular-26531.firebaseio.com/User_${this.userId}/Games.json`)
        .pipe(map(response => {
            const gamesArray=[];
            for(const key in response){
                gamesArray.push({id:key,...response[key]})
            }
            return gamesArray
        }))
    }

    fetchOneGame(id:string){
       return this.http.get<game>(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${id}.json`)
    }

    EditGame(id,gameData){
        return this.http.patch(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${id}.json`,gameData)
    }

    RemoveGame(id){
        this.http.delete(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${id}.json`)
        .subscribe(() => {
            this.router.navigate(["/games"]);
        })
    }

/*     AddToPlayedlist(gameName:string,gameId:string){
        return this.http.post<Subscription>(`https://angular-26531.firebaseio.com/User_${this.userId}/Games.json`,
        {AddedToPlayedListOrNot:true});
    } */

    changeGamePlayedOrNotState(gameId:string){
        return this.http.patch(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${gameId}.json`,{AddedToPlayedListOrNot:true})
    }

    fetchPlayedGames(){
        return this.http.get(`https://angular-26531.firebaseio.com/User_${this.userId}/Games.json`)
        .pipe(map((reponseData) => {
            const playedGamesArray = [];
            for(let key in reponseData){
                if(reponseData[key].AddedToPlayedListOrNot){
                    playedGamesArray.push({...reponseData[key],id:key})
                }
            }
            return playedGamesArray
        }))
    }

    AddGameRating(rating:number,gameId:string){
        return this.http.patch(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${gameId}.json`,{personalRating:rating}) 
    }

    fetchRating(gameId:string){
        return this.http.get<game>(`https://angular-26531.firebaseio.com/User_${this.userId}/Games/${gameId}.json`)
        .pipe(map((responseData) => {
            return responseData.personalRating;
        })) 
    }
}