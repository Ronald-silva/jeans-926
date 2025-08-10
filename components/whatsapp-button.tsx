import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CONTACT_INFO } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/icons"

interface WhatsappButtonProps extends React.ComponentProps<typeof Button> {
  iconOnly?: boolean
}

export function WhatsappButton({ iconOnly, children, ...props }: WhatsappButtonProps) {
  const numbers = CONTACT_INFO.whatsapp

  const handleClick = (number: string) => {
    window.open(`https://wa.me/55${number}`, "_blank")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button {...props}>
          <WhatsAppIcon className={iconOnly ? "h-4 w-4" : "mr-2 h-4 w-4"} />
          {!iconOnly && (children || "Falar no WhatsApp")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {numbers.map((item) => (
          <DropdownMenuItem
            key={item.number}
            onClick={() => handleClick(item.number)}
            className="cursor-pointer"
          >
            <WhatsAppIcon className="mr-2 h-4 w-4" />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

