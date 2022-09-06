import { Header } from './components/layouts/Header'
import { Sidebar } from './components/layouts/Sidebar'

function App() {
  return (
    <div className='App'>
      <div className='header-layout'>
        <Header />
        <div className='sidebar-layout'>
          <Sidebar />
          <main className=''></main>
        </div>
      </div>
    </div>
  )
}

export default App
