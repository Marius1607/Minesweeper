import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NameScoreComponent } from './posts/name-score-component/name-score-component';
import { BoardComponent } from './posts/board-component/board-component';

@NgModule({
  declarations: [
    AppComponent,
    NameScoreComponent,
    BoardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
