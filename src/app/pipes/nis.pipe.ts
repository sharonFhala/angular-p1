import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nIS'
})
export class NISPipe implements PipeTransform {

  transform(value: number = 0): string {
    return value + ' ₪';
  }

}
