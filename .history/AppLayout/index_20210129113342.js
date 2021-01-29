// Styles
import { globalStyles } from './styles'
// Custom theme
import { Application } from 'react-rainbow-components'
import { colors } from 'styles/theme'

export default function AppLayout ({ children }) {

  const theme = {
    rainbow: {
        palette: {
            brand: colors.day
        },
        input: {
          background: 'black'
        }
    }
  }

  return (
    <Application theme={theme} >
      <div className="app-layout" >
        {children}
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </Application>
  )
}