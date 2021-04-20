import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers: number[]=[];
  evenNumbers: number[]=[];
  onIntervalFired(firednumber: number){
    //console.log(firednumber);
    if(firednumber % 2===0){
      this.evenNumbers.push(firednumber);
    }else{
      this.oddNumbers.push(firednumber);
    }
  }
}
