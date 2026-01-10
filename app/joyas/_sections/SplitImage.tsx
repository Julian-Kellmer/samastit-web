type SplitSectionProps = {
  id: string
  imageSide?: 'left' | 'right'
  title: string
  body: string
  image: string
}

export default function SplitImage({
  id,
  imageSide = 'left',
  title,
  body,
  image,
}: SplitSectionProps) {
  const isImageLeft = imageSide === 'left'

  const ImageContent = (
    <img
      src={image}
      alt={title}
      className='w-full h-full object-contain'
    />
  )

  const Text = (
    <div
      className={[
        'flex flex-col justify-center p-4 w-full h-full gap-4',
        isImageLeft ? 'items-center' : 'items-start',
      ].join(' ')}>
      <h3
        className={['text-h2', isImageLeft ? 'text-end' : 'text-start'].join(
          ' '
        )}>
        {title}
      </h3>
      <p
        className={[
          'text-body md:w-1/2 w-full opacity-50',
          isImageLeft ? 'self-end text-end' : 'text-start',
        ].join(' ')}>
        {body}
      </p>
    </div>
  )

  return (
    <section
      id={id}
      className= 'layout-wrap md:mt-16 mt-8 col-span-full h-screen'>
      <div className='layout-grid col-span-full h-1/2'>
        {isImageLeft ? (
          <>
            <div className='order-2 md:order-1 col-span-full aspect-square md:col-start-2 md:col-end-[5]'>
              {ImageContent}
            </div>
            <div className='order-1 md:order-2 col-span-full md:col-start-5 md:col-end-[-2]'>{Text}</div>
          </>
        ) : (
          <>
            <div className='col-span-full md:col-start-2 md:col-end-[5]'>{Text}</div>
            <div className='col-span-full md:col-start-5 md:col-end-[-2] aspect-square rounded'>
              {ImageContent}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
