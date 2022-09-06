import { FC, useState } from 'react'
import { useRecoilState } from 'recoil'
import { countersState } from '../atom'

type Props = {
  counterId: number
}

export const Counter: FC<Props> = ({ counterId }) => {
  const [counters, setCounters] = useRecoilState(countersState)
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 0) setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }

  function deleteCounter() {
    const filterCounters = counters.filter((counter) => counter.id !== counterId)
    setCounters(filterCounters)
  }

  return (
    <div className='bg-gray-50 p-2 grid grid-cols-3 text-center items-center mb-4'>
      <div>
        <input type='text' className='p-1 w-full' placeholder='new' />
      </div>
      <div>
        <p className='font-bold text-xl'>{count}</p>
      </div>
      <div className='grid grid-cols-4  gap-x-2'>
        <button className=' bg-red-500 text-white p-1' onClick={increment}>
          +
        </button>
        <button className='bg-blue-500 text-white p-1' onClick={decrement}>
          -
        </button>
        <button className=' bg-yellow-500 text-white p-1' onClick={reset}>
          0
        </button>
        <button className='bg-white' onClick={deleteCounter}>
          ☓
        </button>
      </div>
    </div>
  )
}
