'use client'

import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import SideMenu from './side-menu'

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="Logo Barber" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
