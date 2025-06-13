// lib/useRouteStyles.ts
'use client'

import { usePathname } from 'next/navigation'


export function useRouteIconClass(): string {
  const pathname = usePathname()

  const menuIconStyles: Record<string, string> = {
    '/': 'text-white', // home
    '/about': 'text-black', // about
    '/research': 'text-green-500',
    '/contact': 'text-yellow-400',
  }

  return menuIconStyles[pathname] || 'text-white'
}
