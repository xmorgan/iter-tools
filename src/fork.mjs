/**
 * @generated-from ./$fork.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureIterable } from './internal/iterable'
import { Exchange } from './internal/queues'

function fork (n = Infinity, iterable) {
  const iterator = ensureIterable(iterable)[Symbol.iterator]()
  let iterableCounter = 0
  let noNewIterables = false
  const exchange = new Exchange()
  let done = false
  let doneValue

  function fetch () {
    {
      const newItem = iterator.next()

      if (newItem.done) {
        done = true
        doneValue = newItem.value
      } else {
        exchange.push(newItem.value)
      }
    }
  }

  function returnIterator () {
    if (noNewIterables && iterableCounter === 0) {
      if (typeof iterator.return === 'function') iterator.return()
    }
  }

  function * generateFork (a) {
    try {
      iterableCounter++
      yield 'ensure finally'

      while (true) {
        if (!a.isEmpty()) {
          yield a.shift()
        } else if (done) {
          return doneValue
        } else {
          fetch()
        }
      }
    } finally {
      iterableCounter--
      returnIterator()
    }
  }

  return (function * generateForks () {
    try {
      const consumer = exchange.getConsumer()

      for (let counter = 0; counter < n; counter++) {
        const fork = generateFork(consumer.clone()) // this first call to "next" allows to initiate the function generator
        // this ensures that "iterableCounter" will be always increased and decreased
        //
        // the default behaviour of a generator is that finally clause is only called
        // if next was called at least once

        fork.next() // ensure finally

        yield fork
      }
    } finally {
      noNewIterables = true
      returnIterator()
    }
  }())
}

export default function curriedFork (...args) {
  if (args.length === 2) {
    return fork(...args)
  }

  if (args.length === 0) {
    return fork
  }

  if (typeof args[0] === 'number') {
    return (...args2) => curriedFork(args[0], ...args2)
  }

  return fork(undefined, args[0])
}
