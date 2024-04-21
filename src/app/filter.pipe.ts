import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData(value:any, index:number){
            if(value.employee_name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return data[index];
              }
               
        };
  };

}
