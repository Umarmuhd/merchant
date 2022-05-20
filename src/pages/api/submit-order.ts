import { NextApiRequest, NextApiResponse } from "next";
import notion from "../../utils/notion";

let NOTION_ORDERS_DB_ID = "58ec837be437413c9fc89d5794c15e49";

function prepareTextField(value) {
  return {
    type: "rich_text",
    rich_text: [
      {
        type: "text",
        text: { content: value, link: null },
      },
    ],
  };
}

async function submitOrderAsync(orderParams) {
  const { full_name, phone_number, address, order_data, order_data_extrapolated } = orderParams;

  const orderPage = await notion.pages.create({
    parent: { database_id: NOTION_ORDERS_DB_ID },
    properties: {
      ["Full Name"]: {
        type: "title",
        title: [
          {
            type: "text",
            text: { content: full_name, link: null },
          },
        ],
      },
      Address: prepareTextField(address),
      order_data: prepareTextField(order_data),
      order_data_extrapolated: prepareTextField(order_data_extrapolated),
      ["Phone Number"]: prepareTextField(phone_number),
    },
  });

  return orderPage;
}

const submitOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { orders, name, email, phone } = req.body;

  await orders.forEach(async (order, index) => {
    const orderLists = [];
    const response = await submitOrderAsync({ full_name: name, phone_number: phone });
    if (index === orders.length - 1) {
      return res.status(200).json({ success: true, message: "Order success !" });
    }
  });
};

export default submitOrder;
