import { Component } from '@angular/core';

@Component ({
  templateUrl: './name-score-component.html',
  selector: 'app-name-score'
})

export class NameScoreComponent{
    currentName = 'Guest';
    enteredName = '';
    setName(){
        this.currentName = this.enteredName;
        this.enteredName = "";
    }
}
