export type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
export type ProductType = 'Car' | 'Toy' | 'Food';

export interface User {
  type: UserType;
}

export interface Product {
  type: ProductType;
  price: number;
}

export class AccountService {
  private baseDiscounts: Record<UserType, number> = {
    Standard: 10,
    Premium: 15,
    Gold: 15,
    Free: 0,
  };

  productDiscounts: Record<ProductType, Partial<Record<UserType, number>>> = {
    Car: {
      Gold: 10,
      Premium: 5,
    },
    Toy: {
      Gold: 15,
      Standard: 5,
    },
    Food: {
      Premium: 10,
    },
  };

  getDiscount(user: User, product: Product): number {
    const baseDiscount = this.baseDiscounts[user.type] || 0;
    const productDiscount = this.productDiscounts[product.type]?.[user.type] || 0;

    return baseDiscount + productDiscount;
  }
}
