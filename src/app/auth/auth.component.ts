import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../Services/auth.service";
import { Router } from "@angular/router";


@Component({
    selector:"<app-auth>",
    templateUrl:"./auth.component.html",
    styleUrls:["./auth.component.css"]
})

export class AuthComponent{
    constructor(private authService:AuthService,private router:Router){}

    isLogging:boolean = true;
    isLoading:boolean ;
    error:string;


    onSwitch(){
        this.isLogging = !this.isLogging;
    }


    onSubmitHandler(authForm:NgForm){
        const email = authForm.value.email;
        const password=authForm.value.password;
        this.isLoading=true;
        if(!authForm.valid){
            return;
        }

        if(this.isLogging){
            this.authService.login(email,password)
            .subscribe(response => {
                this.error = "";
                this.isLoading=false;
                this.router.navigate(["/games"]);
                //localId
                console.log(response);
            },err => {
                this.isLoading=false;
                this.error = err.error.error.message;
            });
        }else{
            this.authService.signUp(email,password)
            .subscribe(response => {
                this.error = "";
                this.isLoading=false;
                this.router.navigate(["/games"]);
                console.log(response);
            },err => {
                this.isLoading=false;
                this.error = err.error.error.message;
            });
        } 
        authForm.reset();
    }
}