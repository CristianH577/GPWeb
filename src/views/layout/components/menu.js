import React, { useState } from 'react';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Image, NavbarMenu, NavbarMenuItem, Switch } from "@nextui-org/react";
import { Link as LinkNextUI } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import logo from '../../../assets/imgs/logo-color.png'
import { ChevronDown, MoonIcon, SunIcon } from '../../../assets/icons.js';
import { Inicio, Nosotros, Sucursales, Contacto } from '../../../assets/icons.js';
import { Empresa, Servicios, RRHH } from '../../../assets/icons.js';
import { Locales, Pin } from '../../../assets/icons.js';

import { useLocation, useNavigate } from "react-router-dom";


function Menu() {
  const navigate = useNavigate()
  const location = useLocation()
  const darkMode = useDarkMode(false)

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,

    inicio: <Inicio className="text-primary" fill="currentColor" size={25} />,
    nosotros: <Nosotros fill="currentColor" size={25} />,
    sucursales: <Sucursales fill="currentColor" size={25} />,
    contacto: <Contacto fill="currentColor" size={25} />,

    empresa: <Empresa className="text-gray-600" fill="currentColor" size={30} />,
    servicios: <Servicios className="text-secondary" fill="currentColor" size={30} />,
    rrhh: <RRHH className="text-danger" fill="currentColor" size={30} />,

    locales: <Locales className="text-blue-600" fill="currentColor" size={30} />,
    ubicacion: <Pin className="text-success" fill="currentColor" size={30} />,
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    "Inicio",
    "La Empresa",
    "Servicios",
    "RR-HH",
    "Ubicacion",
    "Locales Comerciales",
    "Contacto",
  ]
  const menuLinks = {
    "Inicio": "inicio",
    "Nosotros": "nosotros",
    "Sucursales": "sucursales",
    "La Empresa": "empresa",
    "Servicios": "servicios",
    "RR-HH": "rrhh",
    "Ubicacion": "ubicacion",
    "Locales Comerciales": "locales",
    "Contacto": "contacto",
  }


  return (
    <Navbar shouldHideOnScroll isBordered
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >

      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} alt='logo' width={50} className='cursor-pointer hover:scale-110 bg-white p-2 rounded-full' onClick={() => navigate('/')} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden items-center sm:flex gap-4" justify="center">

        <Dropdown>
          <NavbarItem isActive={['empresa', 'servicios', 'rrhh'].includes(location.pathname.split('/')[1])} >
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {icons.nosotros} Nosotros
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="nosotros"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              description="Conozca nuestra historia."
              startContent={icons.empresa}
              onClick={() => navigate('/empresa')}
            >
              La Empresa
            </DropdownItem>
            <DropdownItem
              description="Sepa lo que ofrecemos."
              startContent={icons.servicios}
              onClick={() => navigate('/servicios')}
            >
              Servicios
            </DropdownItem>
            <DropdownItem
              description="Trabaje con nosotros."
              startContent={icons.rrhh}
              onClick={() => navigate('/rrhh')}
            >
              RR-HH
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem isActive={['locales', 'ubicacion'].includes(location.pathname.split('/')[1])}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {icons.sucursales} Sucursales
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="sucursales"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              description="Descubra lo que puede ver en nuestras instalaciones."
              startContent={icons.locales}
              onClick={() => navigate('/locales')}
            >
              Locales Comerciales
            </DropdownItem>
            <DropdownItem
              description="Encuentrenos."
              startContent={icons.ubicacion}
              onClick={() => navigate('/ubicacion')}
            >
              Ubicacion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive={['contacto'].includes(location.pathname.split('/')[1])}>
          <LinkNextUI color="foreground" className='gap-1 cursor-pointer flex' onClick={() => navigate('/contacto')}>
            {icons.contacto} Contacto
          </LinkNextUI>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            size="lg"
            color="warning"
            isSelected={!darkMode.value}
            onClick={!darkMode.value ? darkMode.enable : darkMode.disable}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          >
          </Switch>

        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={item}>
            <LinkNextUI
              color='foreground'
              className="w-full gap-1 cursor-pointer"
              size="lg"
              onClick={() => navigate("/" + menuLinks[item])}
            >
              {icons[menuLinks[item]]}{item}
            </LinkNextUI>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Menu;