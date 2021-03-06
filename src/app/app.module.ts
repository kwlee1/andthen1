import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { StoryService } from './story.service';
import { LoginComponent } from './main/login/login.component';
import { AboutComponent } from './main/about/about.component';
import { ShowComponent } from './main/show/show.component';
import { NewComponent } from './main/new/new.component';
import { AccountComponent } from './main/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    AboutComponent,
    ShowComponent,
    NewComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
