/**
 * @generated-from ./$join-as-string-with.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, MaybePromise } from '../../internal/iterable';
declare function joinAsStringWith(
  value: string,
  iterable: InputIterable<string>,
): MaybePromise<string>;
declare function joinAsStringWith(
  value: string,
  iterable: InputIterable<InputIterable<string>>,
): MaybePromise<string>;
declare function joinAsStringWith(
  value: string,
): (iterable: InputIterable<string>) => MaybePromise<string>;
declare function joinAsStringWith(
  value: string,
): (iterable: InputIterable<InputIterable<string>>) => MaybePromise<string>;
export default joinAsStringWith;