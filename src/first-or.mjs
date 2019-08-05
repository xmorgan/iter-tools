/**
 * @generated-from ./$first-or.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureIterable } from './internal/iterable';

function firstOr(whenEmpty, iterable) {
  const iter = ensureIterable(iterable)[Symbol.iterator]();
  const { value, done } = iter.next();
  if (done) return whenEmpty;
  if (typeof iter.return === 'function') iter.return();
  return value;
}

export default firstOr;