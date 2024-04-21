import { Injectable } from '@angular/core';
 import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    console.log("inside service")
    return this.http.get("https://dummy.restapiexample.com/api/v1/employees")
  }
}
