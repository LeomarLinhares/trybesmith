export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductWithId extends IProduct {
  id: number,
}

export interface IProductIdWithOrder extends IProductWithId {
  orderId: number | null;
}

export interface IProductReturn {
  item: IProductWithId;
}
