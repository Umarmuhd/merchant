import "../styles/globals.css";
import { AppProps } from "next/app";
import { CartProvider } from "../context/cartContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default App;
