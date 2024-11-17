import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PlasticDeposited } from "../generated/CarbonWise/CarbonWise"

export function createPlasticDepositedEvent(
  depositor: Address,
  _qtyrecycled: BigInt,
  timeRecycled: BigInt,
  tokenQty: BigInt
): PlasticDeposited {
  let plasticDepositedEvent = changetype<PlasticDeposited>(newMockEvent())

  plasticDepositedEvent.parameters = new Array()

  plasticDepositedEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  plasticDepositedEvent.parameters.push(
    new ethereum.EventParam("_qtyrecycled", ethereum.Value.fromUnsignedBigInt(_qtyrecycled))
  )
  plasticDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "timeRecycled",
      ethereum.Value.fromUnsignedBigInt(timeRecycled)
    )
  )
  plasticDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenQty",
      ethereum.Value.fromUnsignedBigInt(tokenQty)
    )
  )

  return plasticDepositedEvent
}
