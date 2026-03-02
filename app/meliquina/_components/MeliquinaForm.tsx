'use client'
import { useState } from 'react'
import { sendMeliquinaEmail } from '../_actions/sendEmail'

type FormData = {
  nombre: string
  email: string
  telefono: string
  tipoEstadia: string[]
  otroTipo: string
  fechaDesde: string
  fechaHasta: string
  cantPersonas: string
  descripcion: string
  alojamiento: string
  mensaje: string
}

const TIPO_ESTADIA_OPTIONS = [
  { value: 'retiro', label: 'Alquiler del espacio para retiro propio' },
  { value: 'personal', label: 'Estadía personal' },
  { value: 'otro', label: 'Otro (especificar)' },
]

const ALOJAMIENTO_OPTIONS = [
  { value: 'si', label: 'Sí' },
  { value: 'no', label: 'No' },
  { value: 'definir', label: 'A definir' },
]

export function MeliquinaForm() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    tipoEstadia: [],
    otroTipo: '',
    fechaDesde: '',
    fechaHasta: '',
    cantPersonas: '',
    descripcion: '',
    alojamiento: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCheckbox = (value: string) => {
    setForm((prev) => {
      const already = prev.tipoEstadia.includes(value)
      return {
        ...prev,
        tipoEstadia: already
          ? prev.tipoEstadia.filter((v) => v !== value)
          : [...prev.tipoEstadia, value],
      }
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    try {
      // Mapeo del state a la firma esperada por EmailJS
      const payload = {
        nombre_apellido: form.nombre,
        email: form.email,
        telefono: form.telefono,
        tipo_estadia: form.tipoEstadia.join(', '),
        otro_tipo: form.otroTipo,
        fecha_desde:
          form.fechaDesde +
          (form.fechaHasta ? ` hasta ${form.fechaHasta}` : ''),
        cantidad_personas: form.cantPersonas,
        descripcion_propuesta: form.descripcion,
        alojamiento: form.alojamiento,
        mensaje_adicional: form.mensaje,
      }

      await sendMeliquinaEmail(payload)
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setErrorMsg(
        'Ocurrió un error al enviar tu consulta. Por favor, intentá nuevamente.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className='flex flex-col items-center justify-center py-24 gap-6 text-center'>
        <span className='text-[5rem] leading-none'>✦</span>
        <h3 className='text-3xl md:text-4xl font-bold uppercase text-primary'>
          ¡Gracias por escribir!
        </h3>
        <p className='text-gray-400 text-lg max-w-md'>
          Recibimos tu consulta. Te contactamos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-3xl mx-auto flex flex-col gap-10'>
      {/* Row: Nombre + Teléfono */}
      <div className='flex flex-col md:flex-row gap-6'>
        <Field
          label='Nombre y apellido'
          required>
          <Input
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
            placeholder='Tu nombre completo'
            required
          />
        </Field>
        <Field
          label='Teléfono / WhatsApp'
          required>
          <Input
            name='telefono'
            value={form.telefono}
            onChange={handleChange}
            placeholder='+54 9 11 0000-0000'
            required
          />
        </Field>
      </div>

      {/* Email */}
      <Field
        label='Email'
        required>
        <Input
          name='email'
          type='email'
          value={form.email}
          onChange={handleChange}
          placeholder='tu@email.com'
          required
        />
      </Field>

      {/* Tipo de estadía */}
      <Field label='¿Qué tipo de estadía estás buscando?'>
        <div className='flex flex-col gap-3 mt-1'>
          {TIPO_ESTADIA_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className='flex items-center gap-3 cursor-pointer group'>
              <span
                onClick={() => handleCheckbox(opt.value)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all flex-shrink-0 cursor-pointer
                  ${
                    form.tipoEstadia.includes(opt.value)
                      ? 'bg-primary border-primary'
                      : 'border-white/30 group-hover:border-white/60'
                  }`}>
                {form.tipoEstadia.includes(opt.value) && (
                  <svg
                    width='10'
                    height='8'
                    viewBox='0 0 10 8'
                    fill='none'>
                    <path
                      d='M1 4L3.5 6.5L9 1'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </span>
              <span
                onClick={() => handleCheckbox(opt.value)}
                className='text-gray-300 group-hover:text-white transition-colors text-sm md:text-base'>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {form.tipoEstadia.includes('otro') && (
          <Input
            name='otroTipo'
            value={form.otroTipo}
            onChange={handleChange}
            placeholder='Especificá tu propuesta'
            className='mt-4'
          />
        )}
      </Field>

      {/* Fechas */}
      <Field label='Fechas estimadas'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='flex-1'>
            <label className='text-xs uppercase tracking-widest text-gray-500 mb-2 block'>
              Desde
            </label>
            <Input
              name='fechaDesde'
              type='date'
              value={form.fechaDesde}
              onChange={handleChange}
            />
          </div>
          <div className='flex-1'>
            <label className='text-xs uppercase tracking-widest text-gray-500 mb-2 block'>
              Hasta
            </label>
            <Input
              name='fechaHasta'
              type='date'
              value={form.fechaHasta}
              onChange={handleChange}
            />
          </div>
        </div>
      </Field>

      {/* Cantidad de personas */}
      <Field label='Cantidad de personas'>
        <Input
          name='cantPersonas'
          type='number'
          min='1'
          value={form.cantPersonas}
          onChange={handleChange}
          placeholder='Ej: 12'
          className='max-w-[160px]'
        />
      </Field>

      {/* Descripción */}
      <Field label='Breve descripción de la propuesta'>
        <Textarea
          name='descripcion'
          value={form.descripcion}
          onChange={handleChange}
          placeholder='Tipo de actividad, disciplina, perfil del grupo...'
          rows={4}
        />
      </Field>

      {/* Alojamiento */}
      <Field label='¿Necesitás alojamiento?'>
        <div className='flex flex-wrap gap-3 mt-1'>
          {ALOJAMIENTO_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type='button'
              onClick={() =>
                setForm((prev) => ({ ...prev, alojamiento: opt.value }))
              }
              className={`px-5 py-2.5 rounded-full border text-sm uppercase tracking-wider transition-all
                ${
                  form.alojamiento === opt.value
                    ? 'bg-primary border-primary text-white'
                    : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
                }`}>
              {opt.label}
            </button>
          ))}
        </div>
      </Field>

      {/* Mensaje adicional */}
      <Field label='Mensaje adicional'>
        <Textarea
          name='mensaje'
          value={form.mensaje}
          onChange={handleChange}
          placeholder='Algo más que quieras contarnos...'
          rows={4}
        />
      </Field>

      {/* Mensaje de error general si falla EmailJS */}
      {errorMsg && (
        <p className='text-[#D97777] text-sm font-semibold mb-[-1rem]'>
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div className='flex justify-end pt-4'>
        <button
          type='submit'
          disabled={isSubmitting}
          className='group relative overflow-hidden border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-all hover:text-black disabled:opacity-50 disabled:pointer-events-none'>
          <span className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out' />
          <span className='relative'>
            {isSubmitting ? 'Enviando...' : 'Enviar consulta ↗'}
          </span>
        </button>
      </div>
    </form>
  )
}

/* ── Helpers ───────────────────────────────────── */

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='text-xs uppercase tracking-widest text-gray-400'>
        {label}
        {required && <span className='text-primary ml-1'>*</span>}
      </label>
      {children}
    </div>
  )
}

function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={`w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-gray-600
        focus:outline-none focus:border-white transition-colors text-base
        [color-scheme:dark]
        ${className}`}
    />
  )
}

function Textarea({
  className = '',
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return (
    <textarea
      {...props}
      className={`w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-gray-600
        focus:outline-none focus:border-white transition-colors text-base resize-none
        ${className}`}
    />
  )
}
