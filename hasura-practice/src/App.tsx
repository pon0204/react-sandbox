import { RecoilRoot } from 'recoil'
import { Sidebar } from './components/layouts/Sidebar'
import { Index } from './pages'
import { Header } from './components/layouts/Header'

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <div className='header-layout'>
          <Header />
          <div className='sidebar-layout'>
            <Sidebar />
            <main className='py-10'>
              <Index />
            </main>
          </div>
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
