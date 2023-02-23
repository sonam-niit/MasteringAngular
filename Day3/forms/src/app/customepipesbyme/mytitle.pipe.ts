import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitle'
})
export class MytitlePipe implements PipeTransform {

  transform(name: string, gender:string) : string{
    
    if(gender.toLowerCase()=="male")
      return "Mr. "+name;
    else
      return "Miss. "+name;
  }

}
