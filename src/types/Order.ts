export type Order = {
  id: number;
  userId: number;
  productId?: number[];
  productIds?: { id:number }[];
};

export type TypeResultAllOrders = {
  id: number,
  userId: number,
  productIds: number[],
};