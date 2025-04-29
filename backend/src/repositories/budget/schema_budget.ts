export interface BudgetModel {
  id: number;
  name: string;
  created_at: Date;
  company: string;
  cnpj: string;
  email: string;
  phone: string;
  role: string;
  product: string;
  subject: string;
  description: string;
  file: File;
}
