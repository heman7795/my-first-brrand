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
  logo: any;


  constructor(){}
  ngOnInit(){
    console.log(carosel);
    for (let i = 0; i < carosel.length; i++) {
      const element = carosel[i];
      this.logo=element.logourl
    }
  }
}
