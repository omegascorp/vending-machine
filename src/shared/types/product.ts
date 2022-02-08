export interface Product {
  _id?: string;
  productName: string;
  amountAvailable: string;
  cost: number;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}
