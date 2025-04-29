import { FastifyRequest, FastifyReply } from "fastify";
import { budgetRequestSchema } from "../../../schemas/budget/budgetRequest.schema";
import { handleBudgetRequest } from "../../../services/budgetRequest.service";
import { z } from "zod";

// Mude para o esquema JSON compatível com o Fastify
export const budgetRequestSchemaJson = {
  type: "object",
  properties: {
    name: { type: "string" },
    company: { type: "string" },
    cnpj: { type: "string" },
    role: { type: "string" },
    phone: { type: "string" },
    email: { type: "string", format: "email" },
    product: { type: "string" },
    subject: { type: "string" },
    message: { type: "string" },
    file: { type: "string" },
  },
  required: [
    "name",
    "company",
    "cnpj",
    "role",
    "phone",
    "email",
    "product",
    "subject",
    "message",
  ],
};

export type BudgetRequest = z.infer<typeof budgetRequestSchema>;

export async function submitBudgetRequest(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = request.body as BudgetRequest;

  const parse = budgetRequestSchema.safeParse(data);
  if (!parse.success) {
    return reply.status(400).send(parse.error.format());
  }

  const response = await handleBudgetRequest({
    ...parse.data,
    name: parse.data.name || "Default Name",
    company: parse.data.company || "Default Company",
    cnpj: parse.data.cnpj || "Default CNPJ",
    role: parse.data.role || "Default Role",
    phone: parse.data.phone || "Default Phone",
    email: parse.data.email || "Default Email",
    product: parse.data.product || "Default Product",
    subject: parse.data.subject || "Default Subject",
    message: parse.data.message || "Default Message",
    file: parse.data.file ? parse.data.file : undefined,
  });

  return reply.send(response);
}
