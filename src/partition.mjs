import Dequeue from 'dequeue'
import ensureIterable from './internal/ensure-iterable'
import partitionPart from './internal/partition-part'

function partition (func, iter) {
  const satisfied = new Dequeue()
  const unsatisfied = new Dequeue()
  const iterator = ensureIterable(iter)[Symbol.iterator]()

  const part = queue => partitionPart(
    iterator,
    queue,
    value => func(value) ? satisfied : unsatisfied,
    () => 2
  )

  return [part(satisfied), part(unsatisfied)]
}

export default function curriedPartition (func, iter) {
  if (typeof iter === 'undefined') {
    return iter => partition(func, iter)
  }
  return partition(func, iter)
}
