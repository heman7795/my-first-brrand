import { Component } from '@angular/core';
import carosel from './files/home.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brand';
  public countryList:{logo:string, code:string}[] = carosel;
  banner: any;


  constructor(){}
  ngOnInit(){
    console.log(carosel);
    this.banner=carosel 
  }
}
