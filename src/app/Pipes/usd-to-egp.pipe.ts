import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number,currentRate:number=30): number {
    // return value*30;
    return value*currentRate;
  }

}
