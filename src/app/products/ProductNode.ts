export class ProductNode implements IProduct{
	name : string;
	price : number;
	imageName : string;

	contructor(name:string,price:number,imageName:string){
		this.name = name;
		this.price = price;
		this.imageName = imageName;
	}

}