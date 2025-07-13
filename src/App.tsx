import { Home } from '@/islands/home/page'
import { ModeToggle } from '@/components/theme/mode-toogle'
import { ThemeProvider } from "@/components/theme/theme-provider"

function App() {

  return (
    <>
      <ThemeProvider>
        <div className='flex items-center justify-between mt-4 px-6'>
          <h1 className='font-bold text-2xl mx-auto'>
            Grade Issues JBS-TRS
          </h1>
          <ModeToggle />
        </div>
        <div className='mx-4'>
          <Home />
        </div>

      </ThemeProvider>


    </>
  )
}

export default App
