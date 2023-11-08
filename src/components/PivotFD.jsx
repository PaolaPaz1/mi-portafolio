import { useState, useEffect } from 'react'
import { FrameDescription } from './FrameDescription'
import Vscode from '../assets/imgs/vscode.webp'
import Git from '../assets/imgs/git.webp'
import GitHub from '../assets/imgs/github.webp'
import Microsoft from '../assets/imgs/microsoft-logo.png'

export const PivotFD = () => {
  const [centerElement, setCenterElement] = useState(0)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const elements = document.getElementsByClassName('frame-description')

    const distances = Array.from(elements).map((element) => {
      const bounding = element.getBoundingClientRect()
      return Math.abs(bounding.top - windowHeight / 2 + bounding.height / 2)
    })

    const closestElement = distances.indexOf(Math.min(...distances))
    setCenterElement(closestElement)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <FrameDescription
        title='Educación'
        body='En 2018 me gradué de Bachillerato General en el Complejo Educativo Confederación Suiza en San Miguel, ese mismo año me gradué del Programa Empresarial Supérate CASSA San Miguel, ahi me especialicé en 3 areas: Inglés, Informática y Valores. A finales de 2020 termine el Técnico en Idioma Inglés en la Universidad de Oriente UNIVO. Actualmente estoy estudiando Técnico en Ingeniería de Desarrollo de Sotfware en la Escuela Especializada en Ingeniería ITCA-FEPADE San Miguel.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 0}
      />
      <FrameDescription
        title='Habilidades'
        body='Nivel intermedio-alto en idioma inglés.
        Nivel intermedio en Paqueteria de Office.
        Especialista en Frontend.
        Liderazgo y trabajo en equipo.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 1}
      />
      <FrameDescription
        title='Softwares'
        body='Tengo conocimientos en el uso de los siguientes softwares: Vscode, Git, GitHub, Vscode extensions, Paqueteria Office, Canva.'
        hasImgs
        imgs={[
          Vscode, Git, GitHub, Microsoft
        ]}
        hasModal={false}
        isCenter={centerElement === 2}
      />
      <FrameDescription
        title='Mis Proyectos'
        body='Estos son los proyectos que he realizado. Puedes echar un vistazo a traves de screenshots, o por medio de los repositorios en GitHub.'
        hasImgs={false}
        hasModal
        isCenter={centerElement === 3}
      />
    </>
  )
}
