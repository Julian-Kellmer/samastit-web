export interface Customer {
  name: string
  email: string
}

export interface OrderPayload {
  productId: string
  productName: string
  currency: string
  quantity: number
  customer: Customer
}
