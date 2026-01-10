export default function SamastitTechSection() {
  return (
    <section
      id='samastit-tech'
      className='md:mt-16 gap-24 mt-8 h-screen flex flex-col items-start md:col-start-2 md:col-end-[-2] col-span-full'>
      <div className='flex flex-col items-start gap-4'>
        <p className='text-body '>Tecnología</p>
        <h1 className='text-[8rem] leading-[0.8] text-[var(--color-primary)] font-[family-name:var(--font-oswald)] uppercase'>
          Samastit{' '}
        </h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-8 gap-4 flex-1 '>
        {/* Card 1 */}
        <div className='relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-t from-[var(--color-primary)] to-black shadow-2xl overflow-hidden col-span-3 aspect-[1/1]'>
          <div className='flex items-center'>
            <div className='w-6 h-6 rounded-full border border-white/80'></div>
            <div className='w-6 h-6 rounded-full bg-white -ml-3'></div>
          </div>

          <div className='flex flex-col gap-4 z-10 my-auto'>
            <h2 className='text-h2 text-white font-medium uppercase leading-[0.9] tracking-tight'>
              Consulting <br /> Agency
            </h2>
            <p className='text-body text-white/70 max-w-xs'>
              Providing clients with high quality consulting services based on a
              thorough understanding of their needs and goals.
            </p>
          </div>

          <div className='flex justify-between items-end w-full'>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-t from-[var(--color-primary)] to-black shadow-2xl overflow-hidden col-start-[-3] col-end-[-6] col-span-3 aspect-[1/1]'>
          <div className='flex items-center'>
            <div className='w-6 h-6 rounded-full border border-white/80'></div>
            <div className='w-6 h-6 rounded-full bg-white -ml-3'></div>
          </div>

          <div className='flex flex-col gap-4 z-10 my-auto'>
            <h2 className='text-h2 text-white font-medium uppercase leading-[0.9] tracking-tight'>
              Consulting <br /> Agency
            </h2>
            <p className='text-body text-white/70 max-w-xs'>
              Providing clients with high quality consulting services based on a
              thorough understanding of their needs and goals.
            </p>
          </div>

          <div className='flex justify-between items-end w-full'>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
            <span className='text-[10px] text-white/60 uppercase tracking-widest font-bold'>
              Fusionagency®
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
