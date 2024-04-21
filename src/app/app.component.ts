import { Component, OnInit } from '@angular/core';
import  {MyServiceService } from './myService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'appie';
  list:any;
  dataSource=[{},{},{}]
  appData:any;
  constructor(private myService:MyServiceService){}
  ngOnInit(): void {
   
   this.myService.getData().subscribe((res:any)=>{
    if(res){
      this.list=res['data'];
      console.log(res,"jj")
      localStorage.setItem('list',JSON.stringify(this.list))
    }


  })
   this.appData=JSON.parse(localStorage.getItem('list')||'{}')
   
   console.log("Data from API",this.appData,typeof(this.appData))
  // })
  }


}
