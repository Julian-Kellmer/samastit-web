export interface Customer {
  name: string
  email: string
}

export interface OrderPayload {
  productId: string
  productName: string
  price: number
  currency: string
  quantity: number
  customer: Customer
}
