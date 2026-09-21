import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioPage from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
