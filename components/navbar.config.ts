

export type NavbarVariant = 'light' | 'dark' | 'primary' | 'red';

export const navbarStyles = {
  light: {
    text: 'text-white',
    underline: 'after:bg-white',
   
  },
  dark: {
    text: 'text-gray-700',
    underline: 'after:bg-black/50',
   
  },
  primary: {
    text: 'text-blue-700',
    underline: 'after:bg-blue-700',
    
  },
  red: {
    text: 'text-red-700',
    underline: 'after:bg-red-700',
    
  },
} satisfies Record<NavbarVariant, { text: string; underline: string }>;



export type footerVariant = 'altitude'

export const footerStyle = {
  altitude: {  
    aboutFooter: "-mb-5"
}
}satisfies Record<footerVariant, {aboutFooter: string }>;