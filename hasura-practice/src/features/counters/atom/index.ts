import { atom } from 'recoil'
import { TCounter } from '../types'

export const countersState = atom<TCounter[]>({
  key: 'countersListState',
  default: [
    {
      id: 1,
      name: '',
      count: 0,
    },
  ],
})
