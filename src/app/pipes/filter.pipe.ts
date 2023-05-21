import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchInput: string, propName: string): any {
    console.count('PipeRunCount');
    let result = [];
    if (value.length === 0) {
      return value;
    }
    for (const item of value) {
      if (item[propName].toLowerCase().includes(searchInput)) {
        result.push(item);
      }
    }
    return result;
  }
}
