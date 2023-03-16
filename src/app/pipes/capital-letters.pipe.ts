import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {

  transform(value: string =""): string {
    
        return value[0].toUpperCase() + value.slice(1).toLowerCase();
        
  }

}
