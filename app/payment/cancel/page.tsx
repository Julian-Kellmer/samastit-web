'use client'
import {FxLinkButton} from '../../components/FxButton/FxLinkButton'

export default function PaymentCancelPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      <h1 className='text-4xl font-bold mb-4 uppercase'>Payment Cancelled</h1>
      <p className='text-xl mb-8'>The transaction was not completed.</p>
      <FxLinkButton href='/'>Return to Home</FxLinkButton>
    </main>
  )
}
