import React from 'react';

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";


function Empresa() {

    const articulos = [
        {
            title: 'Nuestro Marco Estratégico',
            subarts: [
                {
                    title: 'Visión',
                    content: 'Pretendemos y ponemos todo nuestro esfuerzo para Ser el súper centro de compra numero uno en el país; destacándonos principalmente por nuestro factor humano, solidificando así nuestra imagen en el mercado.'
                },
                {
                    title: 'Misión',
                    content: 'Nuestra misión es apoyar el desarrollo empresarial para beneficio de toda nuestra sociedad, generando más fuentes de trabajos. Para ello trabajamos constantemente, en la calidad de nuestros servicios, en la fidelización de nuestros clientes y proveedores, todo esto sostenido por una importante inversión en el desarrollo de nuestra gente.'
                }
            ],
        },
        {
            title: 'Valores',
            subarts: [
                {
                    title: 'RESPONSABILIDAD y TRANSPARENCIA',
                    content: 'Todos nuestros procesos internos, políticas, las conductas de nuestros representantes y trabajadores y nuestras prácticas profesionales se rigen por los más altos valores morales y buenas costumbres. \n Las personas en nuestra organización en todo momento actúan y se expresan con respeto y honestidad, observando siempre un comportamiento ejemplar digno de la compañía a la cual representan. Nuestro anhelo es que nuestros valores sean reflejados en sus familias y nuestra sociedad.'
                },
                {
                    title: 'CALIDAD',
                    content: 'Estamos comprometidos con la provisión de productos que cumplan con las necesidades y expectativas de nuestros Clientes, buscando su total satisfacción. Trabajamos firme y continuamente en la optimización de todos nuestros procesos para convertirnos y mantenernos como la mejor opción para los consumidores actuales y potenciales.'
                },
                {
                    title: 'DESARROLLO DE NUESTRA GENTE',
                    content: 'Conscientes de que son nuestra máxima fortaleza competitiva, brindamos a nuestros colaboradores capacitación, promoviendo no sólo su preparación profesional, sino también su formación integral como personas.'
                }
            ],
        },
        {
            title: 'Competencias de nuestra organización',
            subarts: [
                {
                    title: 'Mejora Continua',
                    content: 'Compromiso con las cosas bien hechas y el afán de mejorarlas cada día mas.'
                },
                {
                    title: 'Flexibilidad',
                    content: 'Predisposición para adaptarse a situaciones o contextos nuevos y aceptar los cambios positiva y constructivamente.'
                },
                {
                    title: 'Trabajo en equipo',
                    content: 'Deseo y capacidad para trabajar en colaboración hacia la consecución de objetivos en común.'
                },
                {
                    title: 'Orientación a Resultados',
                    content: 'Esfuerzo e interés por alcanzar los objetivos propuestos cuantitativa y cualitativamente en los plazos y en los niveles de eficiencia y estándares de calidad requeridos.'
                },
                {
                    title: 'Identificación con la Organización',
                    content: 'Capacidad y voluntad de orientar los intereses y comportamientos individuales hacia las necesidades y objetivos de la organización haciéndolos propios.'
                }
            ],
        }
    ]

    return (
        <main className='m-3 flex flex-col items-center'>
            <section className='max-w-[1200px] flex flex-col items-center'>
                <article className='my-3'>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-center rounded py-2 mb-5 font-bold text-lg'>Algo de Historia</div>
                    <div className='text-center'>
                        Nuestra empresa nace como un negocio familiar en el año 1964 en calle florida de nuestra ciudad, con el pasar de los años atraviesa de manera favorable las diferentes vicisitudes económicas que se vivieron en el país, llegando años mas tarde a funcionar el primer centro de distribución mayorista en calle Chacabuco al 1100. Ante este gran éxito y superando año tras año todas las previsiones de ventas, nuestra empresa avizoró la necesidad de un nuevo sistema de comercialización y distribución. De esta manera es que en el año1998, se abre el primer Gran centro de compras en Av. Brigido Teran 700, en el cual se vuelca toda la experiencia adquirida a través de los años. Posteriormente a fines del año 1999, ante un firme crecimiento, es que la empresa decide radicarse en el sur de nuestra provincia en la localidad de Concepción.<br /><br />

                        Nuestra empresa cuenta con un prestigio reconocido, tanto por proveedores como también por sus clientes.<br /><br />

                        Nuestra estrategia es la del liderazgo enfocado en la diferenciación. Nos proponemos satisfacer con servicios y atención de excelencia .Debemos seguir estando en contacto permanente con nuestros clientes para conocer sus necesidades y de este modo poder darles respuestas inmediatas, de este modo brindamos autoservicio con comodidades adecuadas para la exhibición de productos, atención personalizada para nuestros clientes mayoristas como así también entrega a domicilio.
                    </div>
                </article>

                <Divider className='my-4' />

                <article className='w-full lg:w-[1000px]'>
                    <Accordion variant="splitted">
                    {articulos.map((art, i) =>
                        <AccordionItem key={'art' + i} aria-label={"Articulo " + i} title={art.title}>
                            <Accordion variant="splitted" isCompact className='pb-3 mb-3'>
                                {art.subarts.map((sub, k) =>
                                    <AccordionItem key={'sub' + i + k} aria-label={"Subarticulo " + i} title={sub.title}>
                                        {sub.content}
                                    </AccordionItem>
                                )}
                            </Accordion>
                        </AccordionItem>
                    )}
                </Accordion>
            </article>

        </section>
        </main >
    );
}

export default Empresa;
