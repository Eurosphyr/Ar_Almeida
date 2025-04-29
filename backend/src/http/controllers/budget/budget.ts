import { z } from "zod";

export async function budget() {
  const budgetSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    company: z.string(),
    budget: z.number().min(0, "Budget must be a positive number"),
    message: z.string().optional(),
    cnpj: z.string(),
    role: z.string(),
    product: z.string(),
    subject: z.string(),
  });

  const body = await budgetSchema.parseAsync(this.body);

  //   const budgetModel = new BudgetModel(body);
  //   await budgetModel.save();

  return {
    statusCode: 200,
    body: {
      message: "Budget request submitted successfully",
    },
  };
}
