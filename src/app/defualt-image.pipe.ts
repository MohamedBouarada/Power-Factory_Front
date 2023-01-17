import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefualtImagePipe implements PipeTransform {

  transform(path: string): string {
    if(!path){
      return "/assets/images/products/prod-1.webp";
    }
    return path;
  }

}
