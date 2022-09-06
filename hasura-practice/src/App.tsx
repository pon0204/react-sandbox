import { Header } from './components/layouts/Header'
import { Sidebar } from './components/layouts/Sidebar'
import { Counter } from './features/counters/Counter'

function App() {
  return (
    <div className='App'>
      <div className='header-layout'>
        <Header />
        <div className='sidebar-layout'>
          <Sidebar />
          <main className='py-10'>
            <Counter />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
