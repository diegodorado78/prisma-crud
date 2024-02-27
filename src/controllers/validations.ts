import * as z from 'zod'

// Define el esquema de validación para el parámetro 'id'
export const IdParamSchema = z.object({
    id: z.number().positive()
});
