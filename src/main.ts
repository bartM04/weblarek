import './scss/styles.scss';

import { CatalogModel } from './components/Models/CatalogModel';
import { BasketModel } from './components/Models/BasketModel';
import { BuyerModel } from './components/Models/BuyerModel';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import { WebLarekApi } from './components/Models/WebLarekApi';
import { API_URL } from './utils/constants';

const catalog = new CatalogModel();

catalog.setProducts(apiProducts.items);

console.log('Массив товаров каталога:', catalog.getProducts());

console.log(
  'Получение первого товара по id:',
  catalog.getProduct(apiProducts.items[0].id)
);

catalog.setPreview(apiProducts.items[0]);

console.log(
  'Товар для подробного просмотра:',
  catalog.getPreview()
);

const basket = new BasketModel();

console.log('Корзина после создания:', basket.getItems());

basket.addProduct(apiProducts.items[0]);

console.log(
  'После добавления первого товара:',
  basket.getItems()
);

basket.addProduct(apiProducts.items[1]);

console.log(
  'После добавления второго товара:',
  basket.getItems()
);

console.log(
  'Количество товаров:',
  basket.getCount()
);

console.log(
  'Общая стоимость:',
  basket.getTotal()
);

console.log(
  'Есть ли первый товар в корзине:',
  basket.contains(apiProducts.items[0].id)
);

basket.removeProduct(apiProducts.items[0].id);

console.log(
  'После удаления первого товара:',
  basket.getItems()
);

basket.clear();

console.log(
  'После очистки корзины:',
  basket.getItems()
);

const buyer = new BuyerModel();

console.log(
  'Пустые данные покупателя:',
  buyer.getData()
);

console.log(
  'Ошибки при пустых данных:',
  buyer.validate()
);

buyer.setData({
  payment: 'online'
});

console.log(
  'После выбора способа оплаты:',
  buyer.getData()
);

buyer.setData({
  address: 'Москва'
});

console.log(
  'После добавления адреса:',
  buyer.getData()
);

buyer.setData({
  email: 'test@test.ru'
});

console.log(
  'После добавления email:',
  buyer.getData()
);

buyer.setData({
  phone: '+79900004567'
});

console.log(
  'После добавления телефона:',
  buyer.getData()
);

console.log(
  'Ошибки после заполнения всех полей:',
  buyer.validate()
);

buyer.clear();

console.log(
  'После очистки данных покупателя:',
  buyer.getData()
);

console.log(
  'Ошибки после очистки:',
  buyer.validate()
);

const api = new Api(API_URL);

const webLarekApi = new WebLarekApi(api);

webLarekApi
  .getProducts()
  .then((result) => {
    catalog.setProducts(result.items);

    console.log(
      'Каталог товаров, полученный с сервера:',
      catalog.getProducts()
    );
  })
  .catch((error) => {
    console.log(error);
  });