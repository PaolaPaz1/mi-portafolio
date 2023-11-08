import '../assets/styles/PersonalInfo.css'
import { InfoItem } from './InfoItem'
import Yo from '../assets/imgs/paoli.jpeg'
import Email from '../assets/icons/email.svg'
import GitHub from '../assets/icons/github.svg'
import Instagram from '../assets/icons/instagram.svg'

export const PersonalInfo = () => {
  return (
    <div className='piContainer'>
      <section className='piPersonal'>
        <img src={Yo} alt='IT should be a photo about me' className='piImg' />
        <p className='myName'>Paola Alemán</p>
      </section>
      <section className='piSocials'>
        <InfoItem icon={Email} text='paola.aleman.paz19@gmail.com' url='paola.aleman.paz19@gmail.com' mailto />
        <InfoItem icon={GitHub} text='@PaolaPaz1' url='https://github.com/PaolaPaz1' mailto={false} />
        <InfoItem icon={Instagram} text='paolaaav__' url='https://www.instagram.com/paolaaav__/' mailto={false} />
      </section>
    </div>
  )
}
