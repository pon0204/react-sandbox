import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { countersState } from '../atom'
import { TCounter } from '../types'

type Props = {
  counter: TCounter
}

export const Counter: FC<Props> = ({ counter }) => {
  const [counters, setCounters] = useRecoilState(countersState)

  function increment() {
    const newCounters = counters.map((currentCounter) =>
      currentCounter.id === counter.id ? { ...counter, count: counter.count + 1 } : currentCounter,
    )
    setCounters(newCounters)
  }

  function decrement() {
    if (!(counter.count > 0)) return
    const newCounters = counters.map((currentCounter) =>
      currentCounter.id === counter.id ? { ...counter, count: counter.count - 1 } : currentCounter,
    )
    setCounters(newCounters)
  }
  function reset() {
    const newCounters = counters.map((currentCounter) =>
      currentCounter.id === counter.id ? { ...counter, count: 0 } : currentCounter,
    )
    setCounters(newCounters)
  }

  function handleInputChange(name: string) {
    const newCounters = counters.map((currentCounter) =>
      currentCounter.id === counter.id ? { ...counter, name } : currentCounter,
    )
    setCounters(newCounters)
  }

  function deleteCounter() {
    const filterCounters = counters.filter((currentCounter) => currentCounter.id !== counter.id)
    setCounters(filterCounters)
  }

  return (
    <div className='bg-gray-50 p-2 grid grid-cols-3 text-center items-center mb-4 shadow-md rounded-md'>
      <div>
        <input
          type='text'
          className='p-1 w-full'
          placeholder='new'
          value={counter.name}
          onChange={(event) => handleInputChange(event.target.value)}
        />
      </div>
      <div>
        <p className='font-bold text-xl'>{counter.count}</p>
      </div>
      <div className='grid grid-cols-4  gap-x-2'>
        <button className=' bg-red-500 text-white p-1 rounded-md' onClick={increment}>
          +
        </button>
        <button className='bg-blue-500 text-white p-1 rounded-md' onClick={decrement}>
          -
        </button>
        <button className=' bg-yellow-500 text-white p-1 rounded-md' onClick={reset}>
          0
        </button>
        <button className='bg-white' onClick={deleteCounter}>
          ☓
        </button>
      </div>
    </div>
  )
}
