import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'changespace'
})
export class FormatPipe implements PipeTransform{

    transform(value: string, data:string) {
       return value.replace(' ',data)
    }
    
}