import Credo from "credo-node";
import { CREDO_API_KEY } from "../../constants";

const environment = process.env.NODE_ENV;

const credo = new Credo(CREDO_API_KEY, environment);

console.log(credo.api_base);

const handler = (req, res) => {
  credo
    .initiatePayments({
      amount: 100,
      currency: "NGN",
      redirectUrl: "https://mywebsites.com/callback",
      transRef: "string",
      paymentOptions: "CARD,BANK,USSD",
      customerEmail: "customer@something.com",
      customerName: "John Doe",
      customerPhoneNo: "+23481300000",
    })
    .then((data) => {
      console.log(data);
    });

  //Verify a transaction direct_charge
  credo.verifyTransaction({
    transRef: "ref:11111",
  });

  credo
    .thirdPartyPay({
      expiryMonth: "01",
      securityCode: "111",
      expiryYear: "22",
      orderAmount: 1000,
      orderCurrency: "NGN",
      transRef: "748rbri4823ruoqedb9h435",
      cardNumber: "4242424242424242",
      customerEmail: "acompany@something.com",
      customerName: "John Doe",
      customerPhoneNo: "09000000000",
    })
    .then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
    );

  credo
    .pay({
      amount: 1000,
      currency: "NGN",
      transRef: "748389842939e3",
      paymentOptions: "CARD",
      customerEmail: "acompany@something.com",
      customerName: "John Doe",
      redirectUrl: "http://localhost/go",
      customerPhoneNo: "09000000000",
    })
    .then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
    );

  credo
    .verifyCardNumber({
      orderCurrency: "NGN",
      paymentSlug: "pIEiYn8xxxxxxxxxxxxx",
      cardNumber: "4242424242424242",
    })
    .then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
    );
  res.status(200).json({ pong: true });
};

export default handler;
