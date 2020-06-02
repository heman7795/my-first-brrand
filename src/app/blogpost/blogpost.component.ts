import { Component, OnInit } from '@angular/core';
import blogpost from '../files/blogpost.json'
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  blog: any;

  constructor() { }

  ngOnInit(): void {
    this.blog = blogpost
  }

}
