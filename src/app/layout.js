import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Header from './Components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}

