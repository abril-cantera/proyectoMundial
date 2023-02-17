import './stylesHome.css'

export function Home() {
  return (
    <>
      <div className="containerPricipal">
        <div className="containerInfoPrincipal">
          <div className='containerInfo'>
            <section className='infoTitleImg'>
              <h1 className="textHome ">Campeon del mundo Qatar 2022 </h1>
              <section className='infoImg'>
                <p className="textHome2">Seleccion Argentina </p>
                <img className='logoSelection' src="https://paladarnegro.net/escudoteca/selecciones/selecciones/png/argentina.png" alt="" />
              </section>
            </section>
            <section className='containerImgHome'>
              <img className="imgHome texto1" src="https://media.ambito.com/p/d9789a11273639ba7d22119b0a99313e/adjuntos/351/imagenes/040/366/0040366985/730x0/smart/messi-seleccion-argentina-mundial.jpg" alt="" />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
