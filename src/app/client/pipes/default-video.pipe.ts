import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultVideo'
})
export class DefaultVideoPipe implements PipeTransform {

  transform(path: string): string {
    if(!path){
      return "bg.mp4";
    }
    return path;
  }

}
