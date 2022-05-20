import React from "react";

export default function OrderComplete() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F0F2F5]">
      <div className="w-full">
        <div className="w-full mx-auto md:w-3/4 bg-white px-4 md:px-8 py-4">
          <img src="/images/success-message.svg" alt="..." className="mx-auto w-2/5" />
          <div className="mt-5 text-center">
            <h1 className="text-xl text-green-800 font-bold mb-3">Thank You For Your Order</h1>
            <p className="text-gray-900">Check your email inbox for the receipt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
