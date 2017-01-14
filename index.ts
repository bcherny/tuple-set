/**
 * ES6 Set where keys are n-tuples
 *
 * TODO: make this n-ary
 * TODO: add tests
 * TODO: add entries, keys, values
 */
export class TupleSet<T, U> {
  private state = new Set<[T, U]>();
  *[Symbol.iterator]() {
    for (const _ of this.state) {
      yield _
    }
  }
  [Symbol.toStringTag]() {
    return '[object TupleSet]'
  }
  add(left: T, right: U): this {
    if (this.has(left, right)) {
      this.delete(left, right)
    }
    this.state.add([left, right])
    return this
  }
  clear(): void {
    this.state.clear()
  }
  delete(left: T, right: U): boolean {
    if (this.has(left, right)) {
      return this.state.delete(this.getKey(left, right)!)
    }
    return false
  }
  forEach(cb: (left: T, right: U, index: T, set: TupleSet<T, U>) => void, thisArg?: any): void {
    this.state.forEach(([l, r]) => cb.call(thisArg || this, l, r, l, this))
  }
  has(left: T, right: U): boolean {
    return Boolean(this.getKey(left, right))
  }
  get size(): number {
    return this.state.size
  }
  private getKey(left: T, right: U): [T, U] | undefined {
    // TODO: compile to ES6 and use for-of instead
    return Array
      .from(this.state.values())
      .find(([l, r]) => l === left && r === right)
  }
}
