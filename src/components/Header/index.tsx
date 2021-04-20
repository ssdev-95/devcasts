import React from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <div className="w-full h-16 bg-items-background px-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img className="h-10" src="favicon.svg" />
        <span className="font-bold text-items-line text-lg">Dev.casts</span>
      </div>
      <span className="font-bold text-text-body-300 text-sm">The best to listen, ever.</span>
      <span className="font-bold text-text-body-300 text-sm">{currentDate}.</span>
    </div>
  )
}
