import './NavBar.css'
import logoCatar from '../img/fifa-world-cup-2022-logo-0E5F05028D-seeklogo.com.png'
export function NavBar() {
  return (
    <header>
      <nav className="headerNav">
        <section className='navSectionImg'>
          <img src={logoCatar} alt="" />
        </section>
        <section>
          <button>Inicio</button>
          <button>Partidos</button>
          <button>Selecciones</button>
          <button>Grupos</button>
        </section>
      </nav>
    </header>
  )
}
