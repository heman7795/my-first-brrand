import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

newarrival(){
  return  this.httpClient.get('/assets/files/newarrivals.json')
}
}
