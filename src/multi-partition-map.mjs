import AdvancedMapInitialized from 'advanced-map-initialized'
import Dequeue from 'dequeue'
import ensureIterable from './internal/ensure-iterable'
import partitionPart from './internal/partition-part'

function uncurried (func, iter) {
  const queueMap = new AdvancedMapInitialized(Map, () => new Dequeue())
  const iterator = ensureIterable(iter)[Symbol.iterator]()
  let exhausted = 0

  const part = queue => partitionPart(
    iterator,
    queue,
    value => queueMap.get(func(value)),
    () => {
      exhausted += 1
      return exhausted >= queueMap.data.size
    }
  )

  return new AdvancedMapInitialized(Map, index => part(queueMap.get(index)))
}

const curried = func => iter => uncurried(func, iter)

export default function multiPartitionMap (func, iter) {
  return iter === undefined ? curried(func) : uncurried(func, iter)
}
