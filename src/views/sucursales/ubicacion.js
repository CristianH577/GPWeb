import React from 'react';
import './ubicacion.css'

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server'
import { Geo, GoogleMap, Map, Phone, Time } from '../../assets/icons/icons.js';

import { UbicacionMap } from '../../assets/imgs/imgs'
import { Card, CardHeader, CardFooter, Image, Divider, Link } from "@nextui-org/react";


function Ubicacion() {
    const position = [-26.80, -65.24]

    const getIcon = (className) => {
        const icon = <Geo size={50} />
        const iconMarkup = renderToStaticMarkup(icon)
        const customMarketIcon = divIcon({
            html: iconMarkup,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -30],
            className: className + ' hover:text-sky-400'
        })

        return customMarketIcon
    }

    const sucursales = [
        {
            coord: [-26.84375, -65.195977],
            title: 'Megacentro de compras Gómez Pardo',
            direc: 'Av. Brígido Terán 700, San Miguel de Tucumán, Tucumán',
            img: UbicacionMap.megacentro_teran,
            icon: getIcon('text-primary'),
            link: 'https://maps.app.goo.gl/hbzz2gv1L1WKbPXGA',
            id: 'teran'
        },
        {
            coord: [-26.84637, -65.2114],
            title: 'Gomez Pardo Mayorista',
            direc: 'Batalla de Chacabuco 1122, San Miguel de Tucumán, Tucumán',
            img: UbicacionMap.mayorista,
            icon: getIcon('text-success'),
            link: 'https://maps.app.goo.gl/aKgjPKzNotHSAfm2A',
            id: 'chacabuco'
        },
        {
            coord: [-26.75908, -65.2436],
            title: 'Gomez Pardo Megacentro de Compras',
            direc: 'Diagonal, Raúl Lechesi, Tafí Viejo, Tucumán',
            img: UbicacionMap.megacentro_tafi,
            icon: getIcon('text-warning'),
            link: 'https://maps.app.goo.gl/uCKcEgN6hyNz2bbUA',
            id: 'tafi'
        },
        {
            coord: [-26.80040, -65.294904],
            title: 'Centro Comercial Gomez Pardo',
            direc: 'Av. Juan Domingo Perón 1900, Yerba Buena, Tucumán',
            img: UbicacionMap.cc,
            icon: getIcon('text-secondary'),
            link: 'https://maps.app.goo.gl/xEvinCMwpgV59Tma8',
            id: 'yb'
        }
    ]

    return (
        <main className='m-3'>
            <div className='h-[500px] m-2 rounded-lg shadow shadow-gray'>
                <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {sucursales.map((suc, i) =>
                        <Marker key={i} position={suc.coord} icon={suc.icon} >
                            <Popup>
                                <Link href={'#' + suc.id} >
                                    <Card isFooterBlurred isPressable className="w-[300px] h-[300px] col-span-12 sm:col-span-7">
                                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                            <h4 className="text-white/90 font-medium text-xl">{suc.title}</h4>
                                        </CardHeader>
                                        <Image
                                            removeWrapper
                                            alt="Relaxing app background"
                                            className="z-0 w-full h-full object-cover"
                                            src={suc.img}
                                        />
                                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                            <div className="flex flex-grow gap-2 items-center">
                                                <div className="flex flex-col">
                                                    <p className="text-tiny text-white/60">{suc.direc}.</p>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>

            <Divider />
            <section id='sucursales' className='flex flex-col items-center'>
                <div className='max-w-[1000px] w-full'>
                    {sucursales.map((suc) =>
                        <Card key={suc.id} id={suc.id} className="mt-5 shadow-md shadow-gray p-0">
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full max-h-[500px] object-cover max-w-none"
                                src={suc.img}
                                width={250}
                            />

                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-white justify-between items-end">
                                <div className='sm:ms-3 sm:py-1 flex flex-col gap-3'>
                                    <div className='text-xl font-bold'>{suc.title}</div>
                                    <div className='flex gap-2'><Map size={30} />{suc.direc}</div>
                                    <div className='flex gap-2'><Time size={30} />
                                        Lunes-Viernes 8-22hs || Sadabos y Domingos 10-18hs
                                    </div>
                                    <div className='flex gap-2'><Phone size={30} />+54 381 999 9999</div>
                                </div>
                                <Link isExternal href={suc.link} className=''>
                                    <GoogleMap size={45} />
                                </Link>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </section>

        </main >
    );
}

export default Ubicacion;
