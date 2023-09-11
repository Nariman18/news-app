import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import Providers from './components/Providers'



export const metadata: Metadata = {
  title: "Nariman's news",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='dark:bg-zinc-900 bg-gray-300 transition-all duration-700 ease-in-out'>
        <Providers>
          <Header />
          <div className='max-w-6xl mx-auto'>{children}</div>
        </Providers>
      </body>
     
      
    </html>
  )
}
