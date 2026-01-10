import FxButton from '../../components/FxButton/FxButton'

export default function PaymentSuccessPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      <h1 className='text-4xl font-bold mb-4 uppercase'>Payment Successful</h1>
      <p className='text-xl mb-8'>Thank you for your purchase.</p>
      <FxButton href='/'>Return to Home</FxButton>
    </main>
  )
}
