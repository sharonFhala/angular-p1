import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {

  transform(value?: string ): string {
    if(value)
        return value.toUpperCase();
        else 
        return "";
  }

}
