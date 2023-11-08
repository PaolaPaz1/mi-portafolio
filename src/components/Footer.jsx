import '../assets/styles/Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Paola Alemán. All rights reserved.</p>
      <div>
        <a href='https://github.com/PaolaPaz1' target='_blank' rel='noopener noreferrer'>GitHub</a>
      </div>
    </footer>
  )
}
