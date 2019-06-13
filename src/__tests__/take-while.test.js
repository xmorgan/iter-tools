/**
 * @generated-from ./$take-while.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { $takeWhile, $toArray, range } from './fns'
const $methodName = 'takeWhile'
describe($methodName, () => {
  it('takeWhile on array', () => {
    const iter = $takeWhile(item => item % 2 === 0, [2, 2, 3, 2, 2, 2])
    expect($toArray(iter)).toEqual([2, 2])
  })
  it('takeWhile on iterable', () => {
    const iter = $takeWhile(item => item !== 4, range({
      start: 1,
      end: 7
    }))
    expect($toArray(iter)).toEqual([1, 2, 3])
  })
  it('takeWhile on iterable (curried version)', () => {
    const iter = $takeWhile(item => item !== 4)
    expect($toArray(iter(range({
      start: 1,
      end: 7
    })))).toEqual([1, 2, 3])
  })
  it('takeWhile on empty iterable', () => {
    expect($toArray($takeWhile(item => item, null))).toEqual([])
  })
})
