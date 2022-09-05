import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completePipe'
})
export class CompletePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
