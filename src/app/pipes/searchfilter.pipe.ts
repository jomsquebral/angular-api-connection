import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  
  transform(value: any, args?: any) : any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLocaleLowerCase();
    // debugger;
    return value.filter(function(items: any){
      return JSON.stringify(items)
      .toLocaleLowerCase()
      .includes(args);
    })
  }


}
