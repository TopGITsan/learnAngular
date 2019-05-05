import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args): any {
    console.log(value, args)
    let newString = value;
    if (args[0]){ // i want a full stop "."
      newString += "."
    }
    if (args[1] === "dot"){
      newString= " BOT " + newString;
    }
    return newString;
  }

}
