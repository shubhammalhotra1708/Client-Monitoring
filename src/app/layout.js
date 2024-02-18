import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>layout</h1>
        <header>
          <h1>Welcome to Client Monitoring Server</h1>
          <nav>
            <Link href="/">Clients</Link>
            <Link href="/hosts">Hosts</Link>
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}

