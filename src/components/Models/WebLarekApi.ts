import {
  IApi,
  IProductList,
  IOrder,
  IOrderResult
} from '../../types';

export class WebLarekApi {

  constructor(private api: IApi) { }

  getProducts(): Promise<IProductList> {
    return this.api.get<IProductList>('/product/');
  }

  createOrder(order: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>('/order', order);
  }

}