import CARBONWISEABI from "./carbonwise.json";
import EVENTMARKETPLACEABI from "./eventmarketplace.json";
import CCMARKETPLACEABI from "./ccmarketplace.json";
import USDTOKENABI from "./usdToken.json";

const CARBONWISE_ADDRESS = "0x7ad57797a0B4c4Ba25AE521136781294Daa78724";
const USD_TOKEN_ADDRESS = "0x3abe22d5977118fF6cb3FC215Bb371F0aC008aa9";
const CREDIT_TOKEN_ADDRESS = "0xe055EC9ff05a73ddf9772e9Ec819b529098C332c";
const EVENT_MARKETPLACE_ADDRESS = "0x230641BeB3Cd6376dAb17D085b4dE0153250162e";
const CC_MARKETPLACE_ADDRESS = "0x91E4B1cBE1C7D95764920FD761d5a7204129017c";

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
