import CARBONWISEABI from "./carbonwise.json";
import EVENTMARKETPLACEABI from "./eventmarketplace.json";
import CCMARKETPLACEABI from "./ccmarketplace.json";
import USDTOKENABI from "./usdToken.json";

const CARBONWISE_ADDRESS = "0x7516A44fF7e991035bC98F6810e957a98c8F8Fb3";
const USD_TOKEN_ADDRESS = "0xf94A277cea999f1a1F664969F88bfec7fbd90A64";
const CREDIT_TOKEN_ADDRESS = "0xe055EC9ff05a73ddf9772e9Ec819b529098C332c";
const EVENT_MARKETPLACE_ADDRESS = "0x720E9140553596E3E96089b3B3937e0EA9fBc557";
const CC_MARKETPLACE_ADDRESS = "0x1d3b5134F84D405A15EAbc7f62a4F3F97a55D4e2";

const SUBGRAPH_URL =
  "https://api.goldsky.com/api/public/project_cm3lt99s4xyjl01yqdfythahi/subgraphs/carbonwise/0.0.1/gn";

const SUBGRAPH_PROD_URL =
  "https://api.goldsky.com/api/public/project_cm3lt99s4xyjl01yqdfythahi/subgraphs/carbonwise/prod/gn";

export {
  CARBONWISE_ADDRESS,
  USD_TOKEN_ADDRESS,
  CREDIT_TOKEN_ADDRESS,
  EVENT_MARKETPLACE_ADDRESS,
  CC_MARKETPLACE_ADDRESS,
  CARBONWISEABI,
  EVENTMARKETPLACEABI,
  CCMARKETPLACEABI,
  USDTOKENABI,
  SUBGRAPH_URL,
  SUBGRAPH_PROD_URL,
};
