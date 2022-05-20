import { NextApiRequest, NextApiResponse } from "next";
import notion from "../../../utils/notion";

async function getOrder(orderId) {
  const dbResponse = await notion.pages.retrieve({
    page_id: orderId,
  });

  if (dbResponse.object !== "page") {
    return false;
  }

  const orderData = {
    status: dbResponse.properties?.Status?.select?.name || "Pending",
    billing_name: dbResponse.properties?.billing_name?.title[0]?.plain_text,
    phone_number: dbResponse.properties?.phone_number?.rich_text[0]?.plain_text,
    delivery_coordinates: dbResponse.properties?.delivery_coordinates?.rich_text[0]?.plain_text,
    order_data_extrapolated:
      dbResponse.properties?.order_data_extrapolated?.rich_text[0]?.plain_text,
  };

  return orderData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { order_id } = req.query;

  const order = await getOrder(order_id);

  res.status(200).json({ name: "John Doe", data: { order } });
}
