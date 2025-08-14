export interface Product{
    id: number;
    title:string;
    price:number;
    image:string;
    category:string;
    description:string;
    rating:{
    rate:number;
    count:number;
    };
}
export interface CartItem extends Product {
  quantity: number;
}

export interface Filters {
  category: string;
  priceRange: [number, number];
  searchQuery: string;
}