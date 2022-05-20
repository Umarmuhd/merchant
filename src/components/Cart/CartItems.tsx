import { CartItem } from './CartItem';

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

type CartItemsProps = {
  readonly products: Array<Product>;
};

export const CartItems = ({ products }: CartItemsProps) => (
  <ul className="-my-6 divide-y divide-gray-200">
    {products.map((product) => (
      <CartItem key={product.id} {...product} />
    ))}
  </ul>
);
