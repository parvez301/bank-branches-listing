import { Pipe, PipeTransform,Injectable } from '@angular/core';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  public transform(value, keys: string, searchText: string) {

    if (!searchText) return value;
    return (value || []).filter((d) => keys.split(',').some(key => d.hasOwnProperty(key) && new RegExp(searchText, 'gi').test(d[key])));
  }
}
