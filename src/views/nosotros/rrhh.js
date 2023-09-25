import React from 'react';

import { Button, Divider } from '@nextui-org/react';

import { CV } from '../../assets/icons/icons.js';


function RRHH() {

    return (
        <main className='m-3'>
            <section className='flex justify-center items-center'>
                <Button color="primary" variant='shadow' size='lg' className='h-[200px] w-[600px] text-[100px] my-4' endContent={<CV size={100} style={{ maxWidth: 'none' }} />} >
                    Eviar CV
                </Button>
            </section>

            <Divider className='my-3' />
            <section>
                <div>
                    Concebimos a nuestra empresa como un gran familia y crecemos en común unión (trabajando en equipo), no nos destaca solamente la tecnología como otras organizaciones, nos destaca principalmente nuestro factor humano (Nuestra calidad de gente) Buscamos siempre “La gente buena y con reales ganas de trabajar” No aquel que trabaja por que en casa le exigen que debe hacerlo, sino el que lo siente (siente la necesidad de superarse como persona). <br /><br />

                    Nuestro centro de compras GOMEZ PARDO es una empresa en la que se puede crecer en todo sentido, tenemos actualmente encargados y gerentes que alguna vez fueron cajeros o repositores, y que supieron desarrollarse aprendiendo de lo bueno que hay en esta empresa, siempre buscando destacarse del resto de sus compañero con una actitud diferente (ser mejores y ser mas profesionales).
                </div>

                <Divider className='my-3' />
                <div className='text-xl font-bold mb-3'>Nuestro Apoyo son nuestros Recursos Humanos</div>
                <div className='ps-3'>
                    Gómez Pardo apuesta al desarrollo interno de todos los colaboradores. <br /><br />
                    Todas las personas pueden ser desarrolladas. Todos tienen potencial para diferentes actividades. <br /><br />
                    No todas las personas son desarrollables en igual medida (depende de su grado de motivación, de su formación previa, de su disponibilidad de tiempo, de su potencial específico y otras). <br /><br />
                    El desarrollo del personal es una responsabilidad de la persona, y la contribución de la empresa consiste en brindar recursos y orientación para sostener e incrementar la empleabilidad. <br /><br />
                    El desarrollo solo se produce cuando el compromiso es mutuo (persona - empresa).
                </div>

            </section>


        </main>
    );
}

export default RRHH;
