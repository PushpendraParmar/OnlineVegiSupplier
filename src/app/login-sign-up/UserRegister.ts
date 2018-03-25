export class UserRegister{
	name : string;
	mobile : number;
	email : string;
	
	constructor(options: {
        name?: string,
        email?: string,
        mobile?: number
      } = {}) {
      this.name = options.name;
      this.email = options.email || '';
      this.mobile = options.mobile;
     
    }

}