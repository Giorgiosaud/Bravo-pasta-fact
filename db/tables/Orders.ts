import { defineDb, defineTable, column } from 'astro:db';

export const Orders = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
  }
})
