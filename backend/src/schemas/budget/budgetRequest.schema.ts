import { z } from "zod";

export const budgetRequestSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  cnpj: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  product: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  file: z.string().optional(), 
});

export type BudgetRequest = z.infer<typeof budgetRequestSchema>;
