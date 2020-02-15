import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './Router.module';
import { GamesComponent } from './Games/games.component';
import { HomeComponent } from './Home/home.component';
import { EditGamesComponent } from './Games/edit-games/edit.games.component';
import { GameComponent } from './Games/Game/game.component';
import { AddGameComponent } from './Games/add-games/add.games.component';
import { GameListComponent } from './Games/games-list/game.list.component';
import { SpinnerComponent } from './utilities/Spinner/spinner.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import {AuthInterceptorsService} from "./Services/auth.interceptor.sevice"
import { PlayedGamesComponent } from './Games/Game/played-games/played.games.component';
import { PlayedGameComponent } from './Games/Game/played-game/played.game.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    HomeComponent,
    EditGamesComponent,
    AddGameComponent,
    GameComponent,
    GameListComponent,
    SpinnerComponent,
    AuthComponent,
    FooterComponent,
    PlayedGameComponent,
    PlayedGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorsService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
