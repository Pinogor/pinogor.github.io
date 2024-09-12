import { AccountService, User, Product } from './AccountService';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  // Скидка 10% для Standard пользователя
  it('discount Standard', () => {
    const user: User = { type: 'Standard' };
    const product: Product = { type: 'Car', price: 1000 };

    const discount = accountService.getDiscount(user, product);

    expect(discount).toBe(10);
  });

  // Базовая скидка 15%, + скидка на Car 5%
  it('discount Premium', () => {
    const user: User = { type: 'Premium' };
    const product: Product = { type: 'Car', price: 1000 };

    const discount = accountService.getDiscount(user, product);

    expect(discount).toBe(20);
  });

  // Базовая скидка 15%, + скидка на Toy 15%
  it('discount Gold', () => {
    const user: User = { type: 'Gold' };
    const product: Product = { type: 'Toy', price: 1000 };

    const discount = accountService.getDiscount(user, product);

    expect(discount).toBe(30);
  });

  // Free пользователь не получает скидку
  it('discount Free', () => {
    const user: User = { type: 'Free' };
    const product: Product = { type: 'Car', price: 1000 };

    const discount = accountService.getDiscount(user, product);

    expect(discount).toBe(0);
  });

  // Базовая скидка Premium пользователя 15%, случай, когда не существует конкретной скидки на товар
  it('discount product exists', () => {
    const user: User = { type: 'Premium' };
    const product: Product = { type: 'Toy', price: 1000 };

    const discount = accountService.getDiscount(user, product);

    expect(discount).toBe(15);
  });
});
