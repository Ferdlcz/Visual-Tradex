const Footer = () => {
return (
  <footer className='bg-[#f2f2f2]'>
    <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
      <div>
        <h2 className='mb-6 text-[15px] font-medium text-gray-500 uppercase font-[SegoeBold]'>Novedades</h2>
        <ul className='text-gray-500 text-[11px]'>
          <li className='mb-4'>
              <a href='#!' className=' hover:underline'>Proximamente</a>
          </li>
        </ul>
       </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-500 uppercase font-[SegoeBold]'>Centro de Ayuda</h2>
          <ul className='text-gray-500 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://discord.gg/gdRmAa5xHU" target="_blank" rel="noopener noreferrer" className='hover:underline'>Discord Server</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://twitter.com/VisualTradex" target="_blank" rel="noopener noreferrer" className='hover:underline'>Twitter</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://www.facebook.com/VisualTradex" target="_blank" rel="noopener noreferrer" className='hover:underline'>Facebook</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://www.instagram.com/VisualTradex" target="_blank" rel="noopener noreferrer" className='hover:underline'>Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-500 uppercase font-[SegoeBold]'>Desarrollo y TI</h2>
          <ul className='text-gray-500 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/opensource' className='hover:underline'>Código abierto</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/opensource/contributing' className='hover:underline'>Contribuciones</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/opensource/codeofconduct' className='hover:underline'>Código de Conducta</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://github.com/VisualTradex" target="_blank" rel="noopener noreferrer" className='hover:underline'>GitHub Empresarial</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-500 uppercase font-[SegoeBold]'>Compañia</h2>
          <ul className='text-gray-500 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/careers' className='hover:underline'>Trabajos</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/about' className='hover:underline'>Acerca de Visual Tradex</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/privacy' className='hover:underline'>Privacidad de Visual Tradex</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-[#f2f2f2] md:flex md:items-center md:justify-between'>
        <img src="/vtxf.png" alt="Visual Tradex" className='w-24'/>
          <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[SegoeUI]'>
            <a href=""className='text-[11px] text-gray-500 hover:underline'>Ponte en contacto con Visual Tradex</a>
            <a href=""className='text-[11px] text-gray-500 hover:underline'>Privacidad</a>
            <a href=""className='text-[11px] text-gray-500 hover:underline'>Marcas Registradas</a>
          <span className='text-[11px] text-gray-500 sm:text-center'>© Visual Tradex <span id='year'>2023</span></span>
          </div>
      </div>
  </footer>

  )
}

export default Footer
