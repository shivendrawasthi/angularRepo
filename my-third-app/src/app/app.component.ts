import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showsecret=false;
  log=[];

onToggleDetails(){
  this.showsecret=!this.showsecret;
  this.log.push(this.log.length+1);
  
}
}