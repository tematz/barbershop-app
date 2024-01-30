import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="Logo Barber" height={18} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
