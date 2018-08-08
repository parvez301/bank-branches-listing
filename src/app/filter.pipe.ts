import { Pipe, PipeTransform,Injectable } from '@angular/core';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
   transform(bank_name: any, searchText: any): any {
    if(searchText == null) return bank_name;

    return bank_name.filter(function(filter){
      return filter.bank_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}