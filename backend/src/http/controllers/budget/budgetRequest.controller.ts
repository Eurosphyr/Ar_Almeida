import { FastifyRequest, FastifyReply } from "fastify";
import { sendEmail } from "../../../utils/mailer";
import { Multipart, MultipartFile, MultipartValue } from "@fastify/multipart";

function isMultipartFile(part: Multipart): part is MultipartFile {
  return (part as MultipartFile).file !== undefined;
}

function isMultipartValue(part: Multipart): part is MultipartValue {
  return (part as MultipartValue).value !== undefined;
}

export async function handleBudgetRequest(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const parts = request.parts();
  const formData: Record<string, string> = {};
  let uploadedFile: Buffer | null = null;
  let fileName = "";

  for await (const part of parts) {
    if (isMultipartFile(part)) {
      const chunks: Uint8Array[] = [];
      for await (const chunk of part.file) {
        chunks.push(chunk);
      }
      uploadedFile = Buffer.concat(chunks);
      fileName = part.filename || "arquivo-sem-nome";
    } else if (isMultipartValue(part)) {
      formData[part.fieldname] = part.value as string; // <-- Aqui
    }
  }

  try {
    await sendEmail(
      formData,
      uploadedFile || Buffer.from(""),
      fileName || "sem-arquivo.txt"
    );

    return reply.status(200).send({ message: "Orçamento enviado com sucesso" });
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ error: "Erro ao enviar orçamento" });
  }
}
