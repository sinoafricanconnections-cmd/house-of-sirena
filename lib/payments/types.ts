export type PaymentStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";

export type PaymentRequest = {
  orderId: string;
  amount: number;
  currency: string;
  customerEmail: string;
};

export type PaymentResult = {
  status: PaymentStatus;
  reference?: string;
  redirectUrl?: string;
};

export interface PaymentProvider {
  createPayment(
    request: PaymentRequest
  ): Promise<PaymentResult>;
}