// Styles
import { globalStyles } from './styles'
// Configs
import navButtons from 'config/buttons'
// Components
import NavBar from 'components/NavBar'

export default function AppLayout ({ children }) {
  return (
    <div className="app-layout" >
      <NavBar navButtons={navButtons} />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}