import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() Data:any;
  header: any;
  searchTxt = '';
  minArray:any=[];
  maxArray:any=[];
  selectValues:any=[];
  sortDir = 1;//1= 'ASE' -1= DSC
  sorting:boolean=false;
  ageArray:any;
  
  constructor() { }
  ngOnInit(): void {
    //for getting header
    this.header = Object.keys(this.Data[0]);
    // console.log(this.header, this.Data)
    //getting maxage
    const maxage = Math.max(...this.Data.map((o: any) => o.employee_age), 0);
    //console.log(maxage);
    //Finding max Age and min Age arrays for showing dropdown
    let i=20
   do{
      console.log("hello ",i,maxage,typeof(this.maxArray))
      
      if(i==20){
        this.maxArray.push(i);
      }
      i=i+20;
      this.maxArray.push(i);
      console.log(this.maxArray)
    } while(i-maxage<0)
    let j=0;
    do{
      console.log("hello in min",j)

      if(j==20){
        j=j+1;
      }
      this.minArray.push(j);
     j=j+20;
    }while(j<maxage)

    console.log(this.minArray,this.maxArray)
    //for showing dropdown Values
   for(let k=0;k<this.maxArray.length;k++){
    let a=this.minArray[k] + "-"+ this.maxArray[k]
    this.selectValues.push(a)
    console.log(this.selectValues)
   }
    
  }
  //for Search function
  search(){
    if(this.searchTxt!=''){
      this.sorting=false;
    }
  }
//for age filter
  agefilter(index:any){
    this.Data=JSON.parse(localStorage.getItem('list')||'{}')
    if(index!=''){
    console.log(index,"age",this.minArray[index],this.maxArray[index],this.Data,this.ageArray)
   this.Data= this.Data.filter((i:any)=>i.employee_age>=this.minArray[index] && i.employee_age<=this.maxArray[index])
    }
    //console.log(this.Data)
  }
  //for Sort function
  sort(event:any) {
    this.sorting=true;
    let target = event.currentTarget,
    classList = target.classList;

  if (classList.contains('fa-chevron-up')) {
    classList.remove('fa-chevron-up');
    classList.add('fa-chevron-down');
    this.sortDir=+1;
  } else {
    classList.add('fa-chevron-up');
    classList.remove('fa-chevron-down');
    this.sortDir=-1;
  }
  this.sortData('employee_salary');
  }
 
//for Sorting
  sortData(colName: any) {
    // console.log(colName,this.sorting)
   this.Data=this.Data.sort((a:any,b:any) => {
      if(this.sortDir==-1){
       return  a[colName]-b[colName]
      }
       else {
       return  b[colName]-a[colName];
       }
    });
  }

}
