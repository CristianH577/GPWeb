import React from 'react';
import './home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


function Home() {

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
      text: "[#84cc16]"
    },
    {
      key: "varios",
      size: 9,
      bg: "warning",
      text: "danger"
    },
  ]


  return (
    <main className='m-3'>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        gap={0}
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
        className='mb-3 rounded shadow'
        wrapperClass='items-center'
      >
        {[...Array(3)].map((x, i) =>
          <SwiperSlide key={i} className='flex justify-center'>
            <img src={require('../../assets/imgs/home-slides/slide_' + (i + 1) + '.jpg')} alt={i} className='rounded' />
          </SwiperSlide>
        )}
      </Swiper>


      <Swiper
        modules={[Navigation, Autoplay, Mousewheel]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
          // 1400: {
          //   slidesPerView: 6,
          // },
        }}
        className='mb-5'
        wrapperClass='items-center'
      >
        {[...Array(6)].map((x, i) =>
          <SwiperSlide key={i} className='cursor-pointer hover:scale-90 flex justify-center' >
            <img alt={'Slide'} src={require('../../assets/imgs/home-usefull-btns/btn' + (i + 1) + '.png')} className='rounded shadow-lg ' />
          </SwiperSlide>
        )}
      </Swiper>


      {lists.map((l, i) =>
        <div key={l.key} className={'flex flex-col gap-1 mb-5 sm:flex-row' + ((i % 2) !== 0 ? "-reverse" : " ")}>
          <div className={
            'bg-' + l.bg +
            ' text-' + l.text +
            ' p-2 rounded flex justify-center items-center'}
          >
            <i className={"bi bi-" + (i + 1) + "-circle"} style={{ fontSize: '150px' }}></i>
          </div>

          <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={15}
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
            className='rounded w-full px-3 sm:py-3 '
            wrapperClass='items-center'
          >
            {[...Array(l.size)].map((x, k) =>
              <SwiperSlide key={l.key + k} className=' bg-' >
                <Card shadow="sm" className='h-full'>
                  <CardBody className="overflow-visible p-0 card-body">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width='100%'
                      // height='100%'
                      alt={l.key + k}
                      className="object-contain max-h-[300px]"
                      src={require(`../../assets/productos/${l.key}/${l.key + (k + 1)}.png`)}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b className='capitalize'>{l.key}</b>
                    <p className="text-default-500">$99.99</p>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            )}
            {[...Array(l.size)].map((x, k) =>
              <SwiperSlide key={l.key + k} className=' bg-' >
                <Card shadow="sm" className='h-full'>
                  <CardBody className="overflow-visible p-0 card-body">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width='100%'
                      // height='100%'
                      alt={l.key + k}
                      className="object-contain max-h-[300px]"
                      src={require(`../../assets/productos/${l.key}/${l.key + (k + 1)}.png`)}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b className='capitalize'>{l.key}</b>
                    <p className="text-default-500">$99.99</p>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      )}

    </main>
  );
}

export default Home;
