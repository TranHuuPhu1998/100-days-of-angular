import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'adu',
  pure : false
})

export class AppAduPipe implements PipeTransform {
  transform(value:any) {
    return  value.filter((v:any) => v.age > 18)
  }

  // transform(value:any , pipe) {
  //   pipe.transform()
  //   return  value.filter((v:any) => v.age > 18)
  // }
}
