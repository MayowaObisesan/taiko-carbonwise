import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { handlePlasticDeposited } from "../src/carbonwise"
import { createPlasticDepositedEvent } from "./carbonwise-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let _qtyrecycled = BigInt.fromI32(120)
    let timeRecycled = BigInt.fromI32(234)
    let tokenQty = BigInt.fromI32(234)
    let newPlasticDepositedEvent = createPlasticDepositedEvent(
      user,
      _qtyrecycled,
      timeRecycled,
      tokenQty
    )
    handlePlasticDeposited(newPlasticDepositedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test
})
