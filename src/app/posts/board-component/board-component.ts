import { Component, Input, Output } from '@angular/core';

@Component({
  templateUrl: './board-component.html',
  selector: 'app-board',
  styleUrls: ['./board-component.scss']

})

export class BoardComponent{
  @Input() public itemList: any[][] = [[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]];

  populateTable(){
  console.log("intra");
  console.log(this.itemList[1]);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      this.itemList[i][j] = (Math.floor(Math.random() * (1000 - 1 + 1) + 1));
    }
    let max = 0;
    for (let j = 0; j < 8; j++){
      if(this.itemList[i][j] > max)
        max = this.itemList[i][j];
    }

    for (let j = 0; j < 8; j++){
      if(this.itemList[i][j] == max)
        this.itemList[i][j] = 'B';
      else
        this.itemList[i][j] = 'S';
    }
  }
  console.log(this.itemList);
}
}
