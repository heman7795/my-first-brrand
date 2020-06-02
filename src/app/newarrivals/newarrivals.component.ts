import { Component, OnInit } from '@angular/core';
import catogries from '../files/newarrivals.json';
import { element } from 'protractor';
import { DataService } from '../data.service';
@Component({
  selector: 'app-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.scss']
})
export class NewarrivalsComponent implements OnInit {
  catogries: any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    // console.log(catogries);
    // this.catogries=catogries

    this.dataservice.newarrival().subscribe(data =>{
      this.catogries=data
    })
  }

}
