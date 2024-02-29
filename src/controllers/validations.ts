// import * as z from 'zod'

// Define el esquema de validación para el parámetro 'id'
// export const IdParamSchema = z.object({
//     id: z.number().positive()
// });
import { z } from 'zod';

export const IdParamSchema = z.object({
    id: z.number().positive(),

});

export type Id = z.infer<typeof IdParamSchema>;
