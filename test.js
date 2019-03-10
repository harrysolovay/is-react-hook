import test from 'ava'
import {isHook, isHookName} from './build'
import {useEffect, useMemo, useState, useContext} from 'react'

test('minimal run-through', t => {
  t.plan(10)

  t.is(isHook(useEffect), true)
  t.is(isHook(useMemo), true)
  t.is(isHook(useState), true)
  t.is(isHook(useContext), true)
  t.is(isHook(() => {}), false)

  t.is(isHookName('useEffect'), true)
  t.is(isHookName('useMemo'), true)
  t.is(isHookName('useState'), true)
  t.is(isHookName('useContext'), true)
  t.is(isHookName('nope'), false)
})
