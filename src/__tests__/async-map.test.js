/**
 * @generated-from ./$map.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { $map, asyncMap, $toArray, asyncToArray, range } from './async-fns'
const $methodName = 'asyncMap'
describe($methodName, () => {
  it('returns mapped iterable', async () => {
    const iter = $map(item => item * 2, [1, 2, 3])
    expect((await $toArray(iter))).toEqual([2, 4, 6])
  })
  it('returns mapped iterable from iterable', async () => {
    const iter = $map(item => item * 2, range({
      start: 1,
      end: 4
    }))
    expect((await $toArray(iter))).toEqual([2, 4, 6])
  })
  it('returns mapped iterable (curried version)', async () => {
    const iter = $map(item => item * 2)
    expect((await $toArray(iter(range({
      start: 1,
      end: 4
    }))))).toEqual([2, 4, 6])
  })
  it('returns empty iterable from null', async () => {
    expect((await $toArray($map(item => item * 2, null)))).toEqual([])
  })
  it('returns mapped iterable (using a promise)', async () => {
    const iter = asyncMap(item => Promise.resolve(item * 2), [1, 2, 3])
    expect((await asyncToArray(iter))).toEqual([2, 4, 6])
  })
})
