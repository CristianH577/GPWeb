import React from 'react';

import { Button, Divider, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';



function Contact() {


  return (
    <main className='m-3 flex flex-col items-center'>
      <section className='max-w-[800px]'>

        <form id='form-contact' className='flex flex-col gap-3 my-5'>
          <RadioGroup
            label="Categoria"
            orientation="horizontal"
            className=''
          >
            <Radio value="r">Recursos Humanos</Radio>
            <Radio value="a">Administración </Radio>
            <Radio value="p">Problema en la pagina </Radio>
            <Radio value="t">Telemarketing </Radio>
          </RadioGroup>

          <Input type="text" variant='underlined' label="Nombre y Apellido" placeholder="Ingrese nombre" />
          <Input type="number" variant='underlined' label="Teléfono" placeholder="381 999 9999" />
          <Input type="email" variant='underlined' label="Email" placeholder="Ingrese email" />

          <Input type="text" variant='underlined' label="Asunto" placeholder="Ingrese asunto" />
          <Textarea
            variant='underlined'
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            maxLength={1000}
          />

          <div className='flex justify-end'>
            <Button color='primary' variant='shadow' size='lg'>Enviar</Button>
          </div>
        </form>

        <Divider />
        <div className='text-center mt-3'>
          Porque estamos convencidos que su consulta nos ayuda a seguir creciendo y brindandole asi un mejor servicio, no deje de comentarnos su opinión sobre nuestros servicios, nuestras ofertas, nuestro stock, nuestro personal, etc.
        </div>

      </section>
    </main>
  );
}

export default Contact;
