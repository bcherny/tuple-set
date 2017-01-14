import test from 'ava'
import { TupleSet } from './'

test('#add', t => {
  const set = new TupleSet
  set.add(1, 2)
  set.add(3, 4)
  set.add(3, 4)
  t.is(set.size, 2)
})

test('#clear', t => {
  const set = new TupleSet
  set.add(1, 2)
  set.add(3, 4)
  t.is(set.size, 2)
  set.clear()
  t.is(set.size, 0)
})

test('#delete', t => {
  const set = new TupleSet
  set.add(1, 2)
  set.add(3, 4)
  t.is(set.size, 2)
  set.delete(1, 2)
  t.is(set.size, 1)
})

test('#forEach', t => {
  const set = new TupleSet
  set.add(1, 2)
  set.add(3, 4)
  set.forEach((l, r) => t.is(r, l === 1 ? 2 : 4))
})

test('#has', t => {
  const set = new TupleSet
  set.add(1, 2)
  t.is(set.has(1, 2), true)
  t.is(set.has(1, 3), false)
})

test('iterating', t => {
  const set = new TupleSet
  set.add(1, 2)
  set.add(3, 4)
  for (let [l, r] of set) {
    t.is(r, l === 1 ? 2 : 4)
  }
})
