import { IProduct } from './IProduct';

export class ProductNode implements IProduct{
	name : string;
	price : number;
	imageName : string;

<<<<<<< HEAD
=======
	name : string;
	price : number;
	imageName : string;

>>>>>>> 4a23bf9b61cb2a85747eacd718bcb3c4d41b2a9c
	contructor(name:string,price:number,imageName:string){
		this.name = name;
		this.price = price;
		this.imageName = imageName;
	}

}