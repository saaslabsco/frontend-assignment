import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SaasLabsProvider } from './context/context'
import Catalog from './pages/Catalog'

function App() {

  return (
    <>
    <SaasLabsProvider>
        <div>
          {/* <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
          <Catalog />
        </div>
      </SaasLabsProvider>
    </>
  )
}

export default App