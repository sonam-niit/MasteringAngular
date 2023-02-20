export class Employee{

    private _id:number;
    private _name:string;
    private _email:string;
    private _country:string;

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id=id
    }
    get name():string{return this._name}
    set name(name:string){this._name=name};

    // constructor(id:number,name:string,email:string,
    //     country:string){
    //     this._id=id;
    //     this._name=name;
    //     this._email=email;
    //     this._country=country;
    // }
    display():void{
        console.log("Id: "+this._id)
        console.log("Name: "+this._name)
        console.log("Email: "+this._email)
        console.log("Country: "+this._country)
    }
}
