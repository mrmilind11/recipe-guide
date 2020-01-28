import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {
  private textLimit = 200;
  transform(value: string, ...args: any[]): any {
    if (args[0] && parseInt(args[0])) {
      this.textLimit = parseInt(args[0]);
    }
    return value.slice(0, this.textLimit) + '...';
  }

}
