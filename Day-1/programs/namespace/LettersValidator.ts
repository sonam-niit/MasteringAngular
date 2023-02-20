///<reference path="validation.ts"/>
namespace validation{

    const letterRegex=/^[A-Za-z]+$/;
    export class LettersValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return letterRegex.test(s);
        }

    }
}