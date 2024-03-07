import { Inter } from 'next/font/google'
import './globals.css'
// import Link from 'next/link';
import Header from './Components/Header/Header';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script strategy="beforeInteractive" src="https://code.jquery.com/jquery-3.7.1.js"  />
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"  />
        <Script strategy="beforeInteractive" src="https://cdn.datatables.net/2.0.1/js/dataTables.js" />
        <Script strategy="beforeInteractive" src="https://cdn.datatables.net/2.0.1/js/dataTables.bootstrap5.js"  />
        <Script strategy="beforeInteractive" src="https://cdn.datatables.net/v/bs5/jq-3.7.0/dt-2.0.1/b-3.0.0/b-colvis-3.0.0/cr-2.0.0/date-1.5.2/fc-5.0.0/fh-4.0.0/r-3.0.0/rg-1.5.0/rr-1.5.0/sc-2.4.0/sp-2.3.0/sl-2.0.0/sr-1.4.0/datatables.min.js" />
    
        <Header />
        {children}
      </body>
      
   
    </html>
  )
}

