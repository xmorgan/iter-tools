/**
 * @generated-from ./$concat.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureIterable } from './internal/async-iterable'

async function * concat (...arrayOfIter) {
  for (const iterable of arrayOfIter) {
    yield * ensureIterable(iterable)
  }
}

export default concat
