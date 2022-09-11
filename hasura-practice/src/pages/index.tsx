import { Counter } from '../features/counters/conponents/Counter'
import { useRecoilState } from 'recoil'
import { countersState } from '../features/counters/atom'
import { useState } from 'react'
import { useCountersQuery } from '../features/counters/hooks/useCountersQuery'

export const Index = () => {
  const [counters, setCounters] = useRecoilState(countersState)
  const [counterId, setCounterId] = useState(1)
  const { loading, error } = useCountersQuery()

  function addCounter() {
    setCounters([...counters, { id: counterId + 1, name: 'new', count: 0 }])
    setCounterId(counterId + 1)
  }

  // TODO: suspenseの仕組みを調べてコード改善
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div className='w-[30rem] mx-auto text-center'>
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} />
      ))}
      <button className=' bg-green-400 mt-4 text-white p-1 w-full' onClick={addCounter}>
        new counter
      </button>
      {<p>title list: {counters.map((counter) => counter.name).join(',')}</p>}
      {<p>sum of count: {counters.reduce((current, counter) => current + counter.count, 0)}</p>}
    </div>
  )
}
