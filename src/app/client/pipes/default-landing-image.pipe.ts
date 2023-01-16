import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultLandingImage'
})
export class DefaultLandingImagePipe implements PipeTransform {

  transform(path: string): string {
    if(!path){
      return "prog-bg.jpg";
    }
    return path;
  }
}
