import { PlaceOrderDto } from '@/lib/validations/api';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type PlaceOrderResponse = {
  orderId: string;
  totalPrice: number;
}

export const placeOrderRequest = async (placeOrderDto: PlaceOrderDto) => {
  const { data } = await axios.post<PlaceOrderResponse>('/api/order', placeOrderDto);
  return data;
};

export interface UsePlaceOrderOptions {
  onSuccess?: (data: PlaceOrderResponse, variables: PlaceOrderDto, context: any) => void;
}

export const usePlaceOrder = (options?: UsePlaceOrderOptions) => {
  const mutation = useMutation({
    mutationFn: placeOrderRequest,
    onSuccess: options?.onSuccess,
  })

  return mutation;
};
