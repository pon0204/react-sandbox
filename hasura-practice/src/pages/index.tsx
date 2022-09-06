import { Counter } from '../features/counters/conponents/Counter'
import { useRecoilState } from 'recoil'
import { countersState } from '../features/counters/atom'
import { useState } from 'react'

export const Index = () => {
  const [counters, setCounters] = useRecoilState(countersState)
  const [counterId, setCounterId] = useState(1)

  function addCounter() {
    setCounters([...counters, { id: counterId + 1, name: '', count: 0 }])
    setCounterId(counterId + 1)
  }

  return (
    <div className='w-[30rem] mx-auto'>
      {counters.map((counter) => (
        <Counter key={counter.id} counterId={counter.id} />
      ))}
      <button className=' bg-green-400 mt-4 text-white p-1 w-full' onClick={addCounter}>
        new counter
      </button>
    </div>
  )
}
