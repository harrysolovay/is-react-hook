import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue,
} from 'react'

const fnLookup = {
  [useState]: true,
  [useEffect]: true,
  [useContext]: true,
  [useReducer]: true,
  [useCallback]: true,
  [useMemo]: true,
  [useRef]: true,
  [useImperativeHandle]: true,
  [useLayoutEffect]: true,
  [useDebugValue]: true,
}

const nameLookup = {
  useState: true,
  useEffect: true,
  useContext: true,
  useReducer: true,
  useCallback: true,
  useMemo: true,
  useRef: true,
  useImperativeHandle: true,
  useLayoutEffect: true,
  useDebugValue: true,
}

const createExists = lookup => inQuestion => !!lookup[inQuestion]

export const isHook = createExists(fnLookup)
export const isHookName = createExists(nameLookup)
