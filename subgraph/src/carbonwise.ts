import { PlasticDeposited as PlasticDepositedEvent } from "../generated/CarbonWise/CarbonWise"
import { PlasticDeposited } from "../generated/schema"

export function handlePlasticDeposited(event: PlasticDepositedEvent): void {
  let entity = new PlasticDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.depositor = event.params.depositor
  entity._qtyrecycled = event.params._qtyrecycled
  entity.timeRecycled = event.params.timeRecycled
  entity.tokenQty = event.params.tokenQty

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
