import { IBuyer, TBuyerValidation } from '../../types';

export class BuyerModel {
  protected data: IBuyer = {
    payment: null,
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
      payment: null,
      email: '',
      phone: '',
      address: ''
    };
  }

  validate(): TBuyerValidation {

    const errors: TBuyerValidation = {};

    if (this.data.payment === null) {
      errors.payment = 'Не выбран способ оплаты';
    }

    if (this.data.address.trim() === '') {
      errors.address = 'Укажите адрес';
    }

    if (this.data.email.trim() === '') {
      errors.email = 'Укажите email';
    }

    if (this.data.phone.trim() === '') {
      errors.phone = 'Укажите телефон';
    }

    return errors;
  }
}