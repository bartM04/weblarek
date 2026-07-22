import { IBuyer, TBuyerValidation } from '../../types';

export class BuyerModel {
  protected data: IBuyer = {
    payment: 'online',
    email: '',
    phone: '',
    address: ''
  };

  setData(data: Partial<IBuyer>): void {
    this.data = {
      ...this.data,
      ...data,
    };
  }

  getData(): IBuyer {
    return this.data;
  }

  clear(): void {
    this.data = {
      payment: 'online',
      email: '',
      phone: '',
      address: ''
    };
  }

  validate(): TBuyerValidation {

    const errors: TBuyerValidation = {};

    if (!this.data.payment) {
      errors.payment = 'Не выбран способ оплаты';
    }

    if (!this.data.address) {
      errors.address = 'Укажите адрес';
    }

    if (!this.data.email) {
      errors.email = 'Укажите email';
    }

    if (!this.data.phone) {
      errors.phone = 'Укажите телефон';
    }

    return errors;
  }
}