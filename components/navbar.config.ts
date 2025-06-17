

export type NavbarVariant = 'light' | 'dark' | 'primary' | 'red';

export const navbarStyles = {
  light: {
    text: 'text-white',
    underline: 'after:bg-white',
    position:'absolute z-50 w-full -mt-5'   
  },
  dark: {
    text: 'text-gray-700',
    underline: 'after:bg-black/50',
   position: 'relative mb-7'
  },
  primary: {
    text: 'text-blue-700',
    underline: 'after:bg-blue-700',
    position: 'relative'
  },
  red: {
    text: 'text-red-700',
    underline: 'after:bg-red-700',
    position: 'relative'
  },
} satisfies Record<NavbarVariant, { text: string; underline: string , position: string }>;



export type footerVariant = 'altitude'

export const footerStyle = {
  altitude: {  
    aboutFooter: "-mb-5"
}
}satisfies Record<footerVariant, {aboutFooter: string }>;