import { useState } from 'react'
import Modal from 'react-modal'
import { PivotModal } from './PivotModal'
import FS1 from '../assets/imgs/fullstack1.webp'
import FS2 from '../assets/imgs/fullstack2.webp'
import '../assets/styles/ProjectsModal.css'

export default function ProjectsModal () {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className='main-button'>View Projects</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(100, 100, 100, 0.75)' }
        }}
      >
        <PivotModal
          title='FullStack Resource Management Solution'
          body='Discover our Fullstack Resource Management System, powered by Express for the API and MySQL for seamless database connectivity. This project offers an intuitive user interface, built with vanilla JavaScript, ensuring efficient resource allocation, tracking, and reporting. With local storage for user sessions and technologies like Express, Knex, CORS, and MySQL2, it streamlines resource management, enhancing productivity and user experience. Explore the future of resource management today. Made it collaboratively with classmates.'
          hasImgs
          imgs={[FS1, FS2]}
          hasPrjt={false}
          githubUrl='https://github.com/PaolaPaz1/proyecto-final-main'
        />
        <hr />
        <p className='incoming'>And more incoming ...</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
