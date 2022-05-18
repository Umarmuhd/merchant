import { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../utils/notion';

let NOTION_MENU_DB_ID = '08aada5817794ae19f802282e2eea74a';

async function getMenu() {
  const menu = [];
  const dbResponse = await notion.databases.query({
    database_id: NOTION_MENU_DB_ID,
  });

  dbResponse.results.forEach((item) => {
    const menuItem = {
      id: item.id,
      name: item.properties?.name?.title[0]?.plain_text,
      image: item.properties?.image?.files[0]?.file.url,
      price: item.properties?.price?.number,
      item_tags: [],
    };

    try {
      const tags = [];
      for (const option of item.properties.item_tags.multi_select) {
        tags.push(option.name);
      }
      menuItem.item_tags = tags;
    } catch (e) {}

    menu.push(menuItem);
  });
  return menu;
}

const products = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await getMenu();
  res.status(200).json({ name: 'John Doe', data: { products } });
};

export default products;
