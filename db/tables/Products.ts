import { defineDb, defineTable, column } from 'astro:db';

export const Products = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    price: column.number(),
  }
})
