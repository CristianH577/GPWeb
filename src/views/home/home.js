import React, { useState, useEffect } from 'react';
import './home.css'

import useDarkMode from "use-dark-mode";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Slides } from '../../assets/imgs/imgs';

import { Card, CardBody, CardFooter, Divider, Image, Spinner } from "@nextui-org/react";

import { Tooltip, Button } from "@nextui-org/react";
import { Locales, CallCenter, TwoCards, PinMap, Ofertas } from '../../assets/icons/icons.js';



function Home() {
  const darkMode = useDarkMode(false)
  const [show, setShow] = useState({})

  const fasterButtons = [
    [<Locales size={80} className='p-1 text-primary' />, 'Locales Comerciales'],
    [<TwoCards size={80} className='p-1 text-warning' />, 'Tarjetas'],
    [<PinMap size={80} className='p-1 text-success' />, 'Sucursales'],
    [<CallCenter size={80} className='p-1 text-secondary' />, 'Ventas'],
    [<Ofertas size={80} className='p-1 text-danger' />, 'Folletos de Ofertas']
  ]

  const lists = [
    {
      key: "bebidas",
      size: 10,
      bg: "danger",
      text: "warning"
    },
    {
      key: "fruta",
      size: 11,
      bg: "success",
      text: "primary"
    },
    {
      key: "limpieza",
      size: 11,
      bg: "secondary",
      text: "success"
    },
    {
      key: "varios",
      size: 9,
      bg: "warning",
      text: "danger"
    },
  ]


  const artContent = (l, i) => <>
    <div className={
      'bg-' + l.bg +
      ' text-' + l.text +
      ' px-4 rounded flex justify-center items-center shadow'}
    >
      <i className={"bi bi-" + (i + 1) + "-circle text-[150px]"} ></i>
    </div>

    <Swiper
      modules={[Navigation, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      mousewheel={true}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
        1800: {
          slidesPerView: 7,
        },
        2000: {
          slidesPerView: 8,
        },
        2400: {
          slidesPerView: 10,
        },
      }}
      className='rounded w-full'
      wrapperClass='items-center '
    >
      {[...Array(l.size)].map((x, k) =>
        <SwiperSlide key={l.key + k} className='p-2' >
          <Card className='h-full w-full shadow '>
            <CardBody className="overflow-visible p-0 card-body">
              <Image
                radius="lg"
                width='100%'
                alt={l.key + k}
                className="object-contain max-h-[300px] h-full shadow shadow-gray"
                src={require(`../../assets/productos/${l.key}/${l.key + (k + 1)}.png`)}
              />
              <div className='bg-gradient-to-l from-danger-500 to-warning-500 rounded-lg h-[20px] w-[50px] absolute top-[10px] left-[10px] z-10 shadow shadow-gray'></div>
              <div className='bg-gradient-to-b from-purple-500 to-pink-500 rounded h-[40px] w-[80px] absolute bottom-[10px] right-[10px] z-10 shadow shadow-gray' ></div>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className='capitalize'>{l.key}</b>
              <p className="text-default-500">$99.99</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
      )}
      {[...Array(l.size)].map((x, k) =>
        <SwiperSlide key={l.key + k} className='p-2' >
          <Card className='h-full w-full shadow '>
            <CardBody className="overflow-visible p-0 card-body">
              <Image
                radius="lg"
                width='100%'
                alt={l.key + k}
                className="object-contain max-h-[300px] h-full shadow shadow-gray"
                src={require(`../../assets/productos/${l.key}/${l.key + (k + 1)}.png`)}
              />
              <div className='bg-gradient-to-l from-danger-500 to-warning-500 rounded-lg h-[20px] w-[50px] absolute top-[10px] left-[10px] z-10 shadow shadow-gray'></div>
              <div className='bg-gradient-to-b from-purple-500 to-pink-500 rounded h-[40px] w-[80px] absolute bottom-[10px] right-[10px] z-10 shadow shadow-gray' ></div>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className='capitalize'>{l.key}</b>
              <p className="text-default-500">$99.99</p>
            </CardFooter>
          </Card>
        </SwiperSlide>
      )}
    </Swiper>
  </>
  const artPlaceholder = () => <>
    <div className='bg-danger text-warning p-2 rounded flex justify-center items-center w-1/2 h-[200px] shadow shadow-gray' >
      <Spinner color="warning" />
    </div>

    <div className='flex items-center justify-center w-full'>
      <Spinner color="primary" />
    </div>
  </>

  const loadContent = () => {
    if (!show['home-faster-menu']) {
      setTimeout(() => {
        show['home-faster-menu'] = true
        setShow({ ...show })
      }, 500)
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            var id = 'offers-' + i
            show[id] = true
            setShow({ ...show })
          }, i * 1000)
        }
      }, 1000)
    }
  }


  useEffect(() => {
    loadContent()
    // eslint-disable-next-line
  }, [])


  return (
    <main className='m-3'>

      <section id='home-slider' >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className='mb-3 rounded '
          wrapperClass='items-center'
        >
          {Slides.map((x, i) =>
            <SwiperSlide key={i} className={'flex justify-center '}>
              <Image src={x} alt={'Slide ' + i} className={'rounded md:max-w-[1200px]'} />
            </SwiperSlide>
          )}
        </Swiper>
      </section>


      <Divider />
      <section id='home-faster-menu' className='my-3 flex flex-wrap justify-around gap-5'>
        {show['home-faster-menu'] &&
          fasterButtons.map((x, i) =>
            <Tooltip
              key={i}
              content={x[1]}
              // showArrow={true}
              placement='bottom'
              className={darkMode.value ? 'dark' : ''}
              classNames={{
                base: "shadow text-foreground",
              }}
            >
              <Button variant='light' isIconOnly className='w-[100px] h-[100px]'>
                {x[0]}
              </Button>
            </Tooltip>
          )
        }
      </section>


      <Divider />
      <section id='home-faster-menu' className='my-3 flex flex-wrap justify-around gap-5 '>
        {show['home-faster-menu'] &&
          [...Array(4)].map((x, i) =>
            <div key={i} className='w-[200px] h-[200px] bg-orange-500 bg-gradient rounded-lg shadow-md shadow-gray'>

            </div>
          )
        }
      </section>


      <Divider />
      <section id='home-offers' className='my-3'>
        <div className='flex justify-center items-center h-[150px] rounded-xl text-[90px] bg-gradient-to-r from-cyan-500 to-blue-500 shadow shadow-gray'>
          Ofertas
        </div>
        {lists.map((l, i) =>
          <article key={l.key} id={'offers-' + i} className={'flex flex-col gap-1 my-4 ' + ((i % 2) !== 0 ? "sm:flex-row-reverse " : "sm:flex-row ")}>
            {show['offers-' + i] ? artContent(l, i) : artPlaceholder()}
          </article>
        )}
      </section>

    </main>
  );
}

export default Home;
