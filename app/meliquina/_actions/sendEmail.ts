'use server'

export async function sendMeliquinaEmail(formData: {
  nombre_apellido: string
  email: string
  telefono: string
  tipo_estadia: string
  otro_tipo: string
  fecha_desde: string
  cantidad_personas: string
  descripcion_propuesta: string
  alojamiento: string
  mensaje_adicional: string
}) {
  const serviceId = process.env.EMAIL_SERVICE_ID
  const templateId = 'template_MeliquinaEmail'
  const publicKey = process.env.EMAIL_PUBLIC_KEY
  const privateKey = process.env.EMAIL_PRIVATE_KEY

  if (!serviceId || !publicKey || !privateKey) {
    console.error('Faltan credenciales de EmailJS en las variables de entorno.')
    throw new Error('Error de configuración del servidor.')
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: formData,
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('EmailJS error:', res.status, errorText)
      throw new Error('Error al conectar con EmailJS.')
    }

    return { success: true }
  } catch (error) {
    console.error('sendMeliquinaEmail exception:', error)
    throw new Error('No se pudo enviar el correo.')
  }
}
