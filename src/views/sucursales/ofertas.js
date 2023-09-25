import React, { useState } from 'react';

import { Card, CardFooter, Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { OfertasFolletos } from '../../assets/imgs/imgs';

import { useOutletContext } from "react-router-dom";

function Ofertas() {
    const context = useOutletContext()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [modalContent, setModalContent] = useState({})
    const [modalZoom, setModalZoom] = useState(false)

    const ofertas = [
        {
            fecha: '16/09/23',
            img: OfertasFolletos[0]
        },
        {
            fecha: '16/09/23',
            img: OfertasFolletos[1]
        }
    ]

    return (
        <main className='m-3'>
            <section className='flex flex-wrap justify-center gap-3'>
                {ofertas.map((oferta, i) =>
                    <Card
                        key={i}
                        isFooterBlurred
                        radius="lg"
                        className="border-none justify-center h-full shadow-lg dark:shadow-secondary"
                    >
                        <Image
                            src={oferta.img}
                            alt={"Folleto " + i}
                            className="object-cover"
                            width={300}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny ">{oferta.fecha}</p>
                            <Button className="text-tiny  bg-black/20" variant="flat" color="default" radius="lg" size="sm" onPress={() => {
                                onOpen()
                                setModalContent(oferta)
                            }}>
                                Ver
                            </Button>
                        </CardFooter>
                    </Card>
                )}
            </section>


            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => setModalZoom(false)}
                size='5xl'
                scrollBehavior='inside'
                className={context.dark ? 'dark' : ''}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 dark:text-white">{modalContent.fecha}</ModalHeader>
                            <ModalBody className='mx-4'>
                                <Image
                                    alt={"Folleto " + modalContent.fecha}
                                    className={"object-cover " + (modalZoom ? 'max-w-none pe-6 rounded-none ' : '')}
                                    classNames={{
                                        img: 'md:w-[150%]'
                                    }}
                                    src={modalContent.img}
                                    onDoubleClick={() => setModalZoom(!modalZoom)}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </main>
    );
}

export default Ofertas;
