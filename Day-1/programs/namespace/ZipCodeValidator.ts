///<reference path="validation.ts"/>
namespace validation{

    const numberRegex=/^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length===3 && numberRegex.test(s);
        }

    }
}