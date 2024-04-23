import Navbar from '@component/Components/Navbar'
import '@component/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  if (typeof Component.getLayout === 'function') {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
