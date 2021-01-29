// Styles
import { globalStyles } from './styles'
// Components
import NavBar from 'components/NavBar'

export default function AppLayout ({ children }) {
  return (
    <div className="app-layout" >
      <NavBar />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}