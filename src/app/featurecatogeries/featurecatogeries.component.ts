import { Component, OnInit } from '@angular/core';
import catogries from '../files/featurecatogries.json';
// import catogries from '../files/newarrivals.json';
@Component({
  selector: 'app-featurecatogeries',
  templateUrl: './featurecatogeries.component.html',
  styleUrls: ['./featurecatogeries.component.scss']
})
export class FeaturecatogeriesComponent implements OnInit {
  catogries: any;
  bag: any;

  constructor() { }

  ngOnInit(): void {
    this.catogries=catogries.data
    this.bag=catogries.second
  }

}
