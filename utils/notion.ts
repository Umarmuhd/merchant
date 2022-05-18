import { NOTION_ACCESS_TOKEN } from '../constants';

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: NOTION_ACCESS_TOKEN });

let NOTION_MENU_DB_ID = '';
let NOTION_ORDERS_DB_ID = '';

async function getDbIdsAsync() {
  const dbResponse = await notion.search({
    filter: {
      value: 'database',
      property: 'object',
    },
  });

  dbResponse.results.forEach((db: any) => {
    switch (db.title[0].text.content) {
      case 'Menu':
        NOTION_MENU_DB_ID = db.id;
        break;
      case 'Orders':
        NOTION_ORDERS_DB_ID = db.id;
        break;
    }
  });

  return dbResponse;
}

getDbIdsAsync();

console.log('here');

export default notion;
