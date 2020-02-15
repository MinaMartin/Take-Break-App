import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Home/home.component";
import { GamesComponent } from "./Games/games.component";
import { AddGameComponent } from "./Games/add-games/add.games.component";
import { EditGamesComponent } from "./Games/edit-games/edit.games.component";
import { GameListComponent } from "./Games/games-list/game.list.component";
import { AuthComponent } from "./auth/auth.component";
import { PlayedGamesComponent } from "./Games/Game/played-games/played.games.component";

 const appRoutes:Routes= [
   { path:"",component:HomeComponent},
   { path:"games",component:GamesComponent,children:[
       {path:"add-game",component:AddGameComponent},
       {path:"edit-game/:id",component:EditGamesComponent},
       {path:'my-games',component:PlayedGamesComponent},
       {path:"",component:GameListComponent}
   ]},
   { path:"auth",component:AuthComponent},
]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}