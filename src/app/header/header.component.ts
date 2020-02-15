import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../Services/auth.service";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class HeaderComponent implements OnInit,OnDestroy{
    constructor(private authService:AuthService){}
    private userSubscription : Subscription;
    LoggedIn:boolean = false;

    ngOnInit(){
        this.userSubscription= this.authService.user.subscribe(user => {
            //console.log(user);
            this.LoggedIn = !!user;
        })
    }

    onLogout(){
        this.authService.logout()
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }
}