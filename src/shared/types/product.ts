export interface Product {
  _id?: string;
  productName: string;
  amountAvailable: number;
  cost: number;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}
