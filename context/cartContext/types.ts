export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export type Action =
  | { type: 'addProduct'; payload: Product }
  | { type: 'deleteProduct'; payload: Product }
  | { type: 'openMenu' }
  | { type: 'closeMenu' };

export type State = {
  readonly products: Array<Product>;
  readonly totalPrice: number;
  readonly isOpen: boolean;
};
