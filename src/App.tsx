import { ThemeProvider } from "@/components/theme/theme-provider"
import { Home } from '@/islands/home/page'
function App() {

  return (
    <>
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
