import { Header } from '../components/layouts/Header'
import { Sidebar } from '../components/layouts/Sidebar'
import { Counter } from '../features/counters/conponents/Counter'
import { useRecoilState } from 'recoil'
import { countersState } from '../features/counters/atom'

export const Index = () => {
  const [counters, setCounters] = useRecoilState(countersState)
  return (
    <div className='header-layout'>
      <Header />
      <div className='sidebar-layout'>
        <Sidebar />
        <main className='py-10'>
          {counters.map((counter) => (
            <Counter key={counter.id} />
          ))}
        </main>
      </div>
    </div>
  )
}
