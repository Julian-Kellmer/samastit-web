This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## CONECCION CON MERCADO PAGO

crear un archivo en lib/mercadopago/server.ts que exporte una funcion que cree una preferencia de mercado pago, o que crea un cliente de este , 

Siguiente paso =====> crear   y configurar uina preferencia de pago (server-side)
Una preferencia de pago es un objeto que contiene informacion acerca del producto o el objeto que deseo cobrar.
dentre de mercado pago esto se conoce como preference. al crear esta se puede definir cosas como:

- items: los productos o servicios que se desean cobrar
-Precio: el precio del producto o servicio
- payer: la persona que va a pagar
- back_urls: las urls a las que se va a redirigir al usuario despues de pagar
- notification_url: la url a la que se va a enviar la notificacion de pago
- auto_return: si se debe retornar automaticamente al usuario despues de pagar

en esta etapa de definicion de preference vamos a indicar que medios de pago se van a usar estos, suelen ser por default lo que ofrece mercado pago.


para crear un preferencia de pago se debe utilizar el metodo asociado a preferencee en el sdk de backend, es necesario que crees una preferencia de pago para cada pedido o fliujo de pago que quieras iniciar.

