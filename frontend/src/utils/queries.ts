import { gql } from "@apollo/client";

export const PLASTIC_DEPOSIT_TX = gql`
  query MyQuery($address: Bytes!) {
    plasticDeposited(where: { depositor: $address }) {
      id
      _qtyrecycled
      timeRecycled
      tokenQty
      transactionHash
      blockTimestamp
      blockNumber
    }
  }
`;
