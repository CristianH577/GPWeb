import React from 'react';

import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";

import { LocalesLogos } from '../../assets/imgs/imgs'


function Locales() {
    const navigate = useNavigate()

    const locales = [
        // {
        //     name: '',
        //     direc: '',
        //     desc: '',
        //     img: '', 
        // sucId: ''
        // },
        {
            name: 'Alto Ahi',
            suc: 'Suc. Tafí Viejo',
            direc: 'Diagonal Lechesi Km. 3,5',
            desc: 'Desayunos y Meriendas',
            img: LocalesLogos.aa,
            sucId: 'tafi'
        },
        {
            name: 'Parrilla & Gourmet',
            suc: 'Suc. Tafí Viejo',
            direc: 'Diagonal Lechesi Km. 3,5',
            desc: 'Parrillada de calidad',
            img: LocalesLogos.gourmet,
            sucId: 'tafi'
        },
        {
            name: 'Macowens',
            suc: 'Suc. Tafí Viejo | Yerba Buena',
            direc: 'Diagonal Lechesi Km. 3,5 | Presidente Perón 1900',
            desc: 'Queres vestir bien?',
            img: LocalesLogos.macowens,
            sucId: 'tafi'
        },
        {
            name: 'Grandiet',
            suc: 'Suc. Tafí Viejo',
            direc: 'Diagonal Lechesi Km. 3,5',
            desc: 'En Grandiet creemos que no hay nada mejor que la naturaleza para recuperar y proteger tu salud.',
            img: LocalesLogos.gradiet,
            sucId: 'tafi'
        },
        {
            name: 'McKio',
            suc: 'Suc. Tafí Viejo',
            direc: 'Diagonal Lechesi Km. 3,5',
            desc: 'Polirrubro: Kiosco, juegos y Pago Fácil',
            img: LocalesLogos.mckio,
            sucId: 'tafi'
        },
    ]

    return (
        <main className='m-3'>
            <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
                {locales.map((l, i) =>
                    <Card key={i} className="w-full shadow-lg shadow-gray">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="Local logo"
                                height={80}
                                radius="sm"
                                src={l.img}
                                width={80}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{l.name}</p>
                                <p className="text-small text-default-500">{l.suc}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>{l.desc}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                showAnchorIcon
                                href={"#" + l.sucId}
                                onClick={() => navigate('/ubicacion')}
                            >
                                Ver Sucursales.
                            </Link>
                        </CardFooter>
                    </Card>
                )}
            </section>
        </main>
    );
}

export default Locales;
