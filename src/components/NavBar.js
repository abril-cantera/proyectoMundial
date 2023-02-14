import './NavBar.css'
import logoCatar from '../img/fifa-world-cup-2022-logo-0E5F05028D-seeklogo.com.png'



export function NavBar() {
  function openSelection() {
    const containerSelection = document.getElementById('containerSelection')
    containerSelection.classList.toggle('containerSelection')

  }
  return (
    <header>
      <nav className="headerNav">
        <section className='navSectionImg'>
          <img src={logoCatar} alt="" />
        </section>
        <section className='navSectionButton'>
          <button>Inicio</button>
          <button>Partidos</button>
          <button onClick={openSelection}>Selecciones</button>
          <button>Grupos</button>
        </section>
      </nav>
    </header>
  )
}
