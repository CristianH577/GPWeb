import React, { useState, useEffect } from 'react';

import { Button, ButtonGroup, Divider, Image } from "@nextui-org/react";

import logo from '../../../assets/imgs/logo-color.png'
import { socials } from '../../../assets/icons/icons';

import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

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

  const social =
    <div className='lg:flex justify-center'>
      <div className='pt-2 grid grid-cols-3 sm:grid-cols-6 lg:gap-10 max-w-[900px]'>
        {socials.map((i) =>
          <div key={i} className='flex justify-center'>
            <Image src={i} alt={i} className='w-[70px] cursor-pointer hover:scale-90' />
          </div>
        )}
      </div>
    </div>


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

  const floatAcctions =
    <ButtonGroup variant='ghost' className=' opacity-25 hover:opacity-100 fixed bottom-[10px] right-[10px] z-10' >
      <Button isIconOnly color='danger' onClick={() => navigate('/ofertas')}>
        <i className="bi bi-fire"></i>
      </Button>
      <Button isIconOnly color='success'>
        <i className="bi bi-whatsapp"></i>
      </Button>
      <Button isIconOnly color='primary' onClick={movePage}>
        <i className="bi bi-arrow-down-up"></i>
      </Button>
    </ButtonGroup>


  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false)
    })
  })


  return (
    <footer className='mt-auto'>

      <div className='bg-gradient-to-b from-danger to-warning'>

        <div className='relative pt-12 mt-12 bg-'>
          <div className='absolute w-full flex justify-center -top-[50%] z-10'>
            <img src={logo} alt='logo' className='bg-white border-danger border-5 rounded-full p-2 w-[90px] relative ' />
          </div>
        </div>

        {!loading && social}

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

      <div className='flex justify-center py-1 text-gray bg-gradient-to-b from-warning to-white'>
        <div>GP Web</div>
        <Divider className='h-auto mx-1' orientation="vertical" />
        <div>© 2023 Kotar, Inc</div>
      </div>

      {!loading && floatAcctions}

    </footer>
  );
}

export default Footer;
