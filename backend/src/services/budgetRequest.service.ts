import { BudgetRequest } from "../@types/budgetRequest.types";

export async function handleBudgetRequest(data: BudgetRequest) {
  console.log("Budget request data:", data);

  return {
    statusCode: 200,
    body: {
      message: "Budget request submitted successfully",
    },
    data: data,
  };
}
