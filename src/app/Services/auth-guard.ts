/* import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRoute, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService){}

    canActivate(route:ActivatedRoute,router:RouterStateSnapshot)
    :boolean|Promise<boolean>|Observable<boolean>{
        return this.authService.user.pipe(map(user => {
            return !!user
        }));
    }
} */