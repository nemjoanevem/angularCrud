import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    CharacterViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "list", component: ListComponent},
      {path: "create", component: CreateComponent},
      {path: "update", component: UpdateComponent},
      {path: "view", component: CharacterViewComponent},
      {path: "login", component: LoginComponent},
      {
        path: '', redirectTo: '/login',
        pathMatch: 'full'
      }

    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
