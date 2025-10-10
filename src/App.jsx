import Header from './components/dashboard/header'
import MainContent from './components/dashboard/maincontent'
import { Toaster } from 'sonner'


function App() {

  return (
    <>
     <div className='w-full h-full '>
        <Header/>

         <MainContent/>

         <Toaster richColors={true}/> 
     </div>
    </>
  )
}

export default App
