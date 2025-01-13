import { defineTable, column } from 'astro:db';
import { Products } from './Products';
import { Orders } from './Orders';

export const OrdersRows = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    productId: column.number({references:()=>Products.columns.id}),
    orderId: column.number({references:()=>Orders.columns.id}),
    quantity: column.number()
  },
  
})
