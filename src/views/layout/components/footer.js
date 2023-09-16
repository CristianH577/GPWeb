import React from 'react';

import { Button, ButtonGroup, Divider, Image } from "@nextui-org/react";

import logo from '../../../assets/imgs/logo-color.png'
import instagram from '../../../assets/icons/icons8-instagram-240.svg'
import facebook from '../../../assets/icons/icons8-facebook-240.svg'
import youtube from '../../../assets/icons/icons8-youtube-play-240.svg'
import whatsapp from '../../../assets/icons/icons8-whatsapp-240.svg'
import linkedin from '../../../assets/icons/icons8-linkedin-240.svg'
import gmail from '../../../assets/icons/icons8-gmail-240.svg'


function Footer() {
  // const iconsName = ['instagram','facebook','youtube', 'whatsapp','linkedin','gmail']
  
  const icons = [instagram, facebook, youtube, whatsapp, linkedin, gmail]

  const sections = ['Encontranos', 'Conocenos', 'Contactanos']

  const subsections = {
    Encontranos: [
      'Direccion, Provincia, Argentina',
      'Direccion, Provincia, Argentina'
    ],
    Conocenos: [
      'La empresa',
      'Servicios',
      'RR-HH'
    ],
    Contactanos: [
      'Email: ',
      'Tel.: +54 381 xxx xxxx',
      'Linkedin: '
    ],
  }

  const movePage = () => {
    const total = document.documentElement.scrollHeight
    const current = window.scrollY
    const windowH = window.innerHeight
    var y = 0
    if (current < (total - windowH) / 2) {
      y = total
    }
    window.scroll(0, y)
  }


  return (
    <footer className='mt-auto'>

      <div className='bg-gradient-to-b from-danger to-warning'>

        <div className='relative pt-12 mt-12 bg-'>
          <div className='absolute w-full flex justify-center -top-[50%] z-10'>
            <img src={logo} alt='logo' className='bg-white border-danger border-5 rounded-full p-2 w-[90px] relative ' />
          </div>
        </div>

        <div className='lg:flex justify-center'>
          <div className='pt-2 grid grid-cols-3 sm:grid-cols-6 lg:gap-10 max-w-[900px]'>
            {icons.map((i) =>
              <div key={i} className='flex justify-center'>
                <Image src={i} alt={i} className='w-[70px] cursor-pointer hover:scale-90' />
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col justify-around sm:flex-row'>
          {sections.map((x, i) =>
            <div key={x} className=' py-3 text-center sm:text-start sm:ps-4'>
              <div>{x}:</div>
              {subsections[x].map((sub, i) =>
                <div key={i} className='sm:ps-3'>{sub}</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-center py-1 text-gray-400 bg-gradient-to-b from-warning'>
        <div>GP Web</div>
        <Divider className='h-auto mx-1' orientation="vertical" />
        <div>© 2023 Kotar, Inc</div>
      </div>

      <ButtonGroup variant='ghost' className=' opacity-25 hover:opacity-100 fixed bottom-[10px] right-[10px] z-10' >
        <Button isIconOnly color='danger'>
          <i className="bi bi-fire"></i>
        </Button>
        <Button isIconOnly color='success'>
          <i className="bi bi-whatsapp"></i>
        </Button>
        <Button isIconOnly color='primary' onClick={movePage}>
          <i className="bi bi-arrow-down-up"></i>
        </Button>
      </ButtonGroup>

    </footer>
  );
}

export default Footer;
