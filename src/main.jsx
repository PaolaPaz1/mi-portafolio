import { createRoot } from 'react-dom/client'
import { PersonalInfo } from './components/PersonalInfo'
import { PivotFD } from './components/PivotFD'

const root = createRoot(document.getElementById('app'))
root.render(
  <div className='container'>
    <div className='main'>
      <PersonalInfo />
    </div>
    <div className='content'>
      <PivotFD />
    </div>
  </div>
)
