import { Albert_Sans } from 'next/font/google'
import './globals.css'

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert',
})

export const metadata = {
  title: 'Infinium Analytics',
  description: 'Transformá tus datos en una ventaja competitiva. Business intelligence, machine learning, market insights y desarrollo web.',
  icons: {
    icon: '/infinium.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${albertSans.className} ${albertSans.variable}`}>
        <noscript>
          <style>{`.ocultar{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
