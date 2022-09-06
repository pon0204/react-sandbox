import { Counter } from '../features/counters/conponents/Counter'
import { useRecoilState } from 'recoil'
import { countersState } from '../features/counters/atom'

export const Index = () => {
  const [counters, setCounters] = useRecoilState(countersState)

  function addCounter() {
    setCounters([...counters, { id: counters.length + 1, name: '', count: 0 }])
  }

  return (
    <div className='w-[30rem] mx-auto'>
      {counters.map((counter) => (
        <Counter key={counter.id} />
      ))}
      <button className=' bg-green-400 mt-4 text-white p-1 w-full' onClick={addCounter}>
        new counter
      </button>
    </div>
  )
}
