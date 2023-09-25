import React from 'react';


function Servicios() {

    const articulos = [
        {
            title: 'Amplia playa de estacionamiento',
            content: 'Contamos con una amplia playa de estacionamiento con una capacidad para 150 automóviles, además de contar con el sector techado para moto y bicicletas, tratamos de brindarles asi una mayor comodidad a la hora de visitarnos.',
            icon: 'car-front',
            color: 'primary'
        },
        {
            title: 'Restobar, con los mejores platos al mejor precio siempre',
            content: 'Nuestro resto bar cuenta con la capacidad para albergar a mas de 100 personas, con el mismo objetivo que el centro de compras Gómez Pardo, el resto bar ofrece la mayor variedad de platillos elaborados bajo la atenta supervisión de nuestro jefe de cocineros, siendo la mejor opción a la hora de elegir gracias a los mejores precios de nuestros platos,en donde la estrella de nuestro servicio es el clásico combo del menú del dia ( entrada, plato principal,postre y gaseosa)',
            icon: 'file-ruled',
            color: 'secondary'
        },
        {
            title: 'Atencion Personalizada',
            content: 'Todo el personal de Centro de compras Gómez Pardo tiene muy en claro que el mayor valor que tiene la empresa son nuestros clientes, los cuales nos eligen dia a dia por ser la mejor relación entre el precio y la calidad.Nuestros empleados estan al servicio de los clientes tratando de satisfacer todas sus necesidades. Además contamos con el servicio de Atención Telefónica donde los clientes pueden realizar sus pedidos los cuales la empresa los entrega en su domicilio.',
            icon: 'info-circle-fill',
            color: 'success'
        },
        {
            title: 'Servicio de vigilancia',
            content: 'Con el objetivo de poder brindarles el mayor bienestar en el paseo que representa salir de sus hogares y venir al Centro de compras Gómez Pardo, disponemos de un servicio de vigilancia altamente calificado que tiene como principal objetivo proteger los bienes de nuestros clientes y de la compañía.',
            icon: 'shield',
            color: 'warning'
        }
    ]

    return (
        <main className='m-3 flex flex-col items-center'>
            <section className='max-w-[1200px] flex flex-col items-center'>
                {articulos.map((art, i) =>
                    <article key={i} className={'flex flex-col sm:flex-row items-center p-2 border rounded mb-5 shadow shadow-gray-500/100 border-' + art.color}>
                        <div className='flex items-center justify-center p-2'>
                            <i className={"text-[100px] bi bi-" + art.icon + " text-" + art.color}></i>
                        </div>

                        <div className='text-center sm:text-start'>
                            <div className={'font-bold text-' + art.color}>{art.title}</div>
                            <div>{art.content}</div>
                        </div>
                    </article>
                )}
            </section>
        </main>
    );
}

export default Servicios;
