import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { taikoHekla } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";


const config = createConfig({
  chains: [taikoHekla],
  connectors: [metaMask()],
  transports: {
    [taikoHekla.id]: http(),
  },
});

export function getConfig() {
  return config;
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
