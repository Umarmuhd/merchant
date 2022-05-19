import React, { useEffect } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { CartItems } from "../../components/Cart/CartItems";
import { useCart } from "../../hooks/useCart";
import random from "../../utils/random";
import { useScript } from "../../hooks/useScript";
import { BackspaceIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

type Inputs = {
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  street_name: string;
  city: string;
  state: string;
  postal_code: string;
};

export default function CheckoutView() {
  const {
    state: { totalPrice, products, isOpen },
    dispatch,
  } = useCart();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const transRef = random();

  useScript("https://www.credocentral.com/inline.js");

  const handlePayment = ({
    phone,
    name,
    email,
  }: {
    phone: string;
    name: string;
    email: string;
  }) => {
    //@ts-ignore
    CredoCheckout({
      transRef,
      amount: 3000,
      redirectUrl: "",
      paymentOptions: ["CARDS", "BANK"],
      currency: "NGN",
      customerName: name,
      customerEmail: email,
      customerPhoneNo: "08032698425",
      onClose: function () {
        console.log("Modal closed");
      },
      callback: function () {
        console.log("Payment Successful");
        router.replace("/order-complete");
      },
      publicKey: "pk_demo-Ghz9Wo4cGeebxzDwfNZdooKLFtX7op.cXgwh6MyBs-d", // You should store your API key as an environment variable
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const { first_name, last_name, phone_number, email_address } = data;
    handlePayment({
      email: email_address,
      phone: phone_number,
      name: `${first_name} ${last_name}`,
    });
  };

  return (
    <div className="h-full min-h-screen bg-[#F0F2F5]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex justify-start mb-8">
          <Link href="/">
            <a>
              <BackspaceIcon />
              Back
            </a>
          </Link>
        </div>
        <div className="grid gap-10 row-gap-3 lg:grid-cols-3">
          <div className="space-y-3 bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900"> Shopping cart </h2>
            <CartItems products={products} />
          </div>
          <div className="space-y-3 col-span-2">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="mt-10 sm:mt-0">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("first_name", { required: true })}
                            />
                            {errors.first_name && (
                              <span className="text-xs text-red-600">First name is required</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("last_name", { required: true })}
                            />
                            {errors.last_name && (
                              <span className="text-xs text-red-600">Last name is required</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("email_address", { required: true })}
                            />
                            {errors.email_address && (
                              <span className="text-xs text-red-600">
                                Email address is required
                              </span>
                            )}
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="street-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Street address
                            </label>
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("street_name", { required: true })}
                            />
                            {errors.street_name && (
                              <span className="text-xs text-red-600">Street name is required</span>
                            )}
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("city", { required: true })}
                            />
                            {errors.city && (
                              <span className="text-xs text-red-600">City name is required</span>
                            )}
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <input
                              type="text"
                              name="region"
                              id="region"
                              autoComplete="address-level1"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("state", { required: true })}
                            />
                            {errors.state && (
                              <span className="text-xs text-red-600">State name is required</span>
                            )}
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              ZIP / Postal code
                            </label>
                            <input
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              {...register("postal_code", { required: true })}
                            />
                            {errors.postal_code && (
                              <span className="text-xs text-red-600">Postal code is required</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Pay now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
