import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log(
  "SMTP_PASS:",
  process.env.SMTP_PASS ? "[OK - definido]" : "[ERRO - indefinido]"
);
// Configure aqui seu email e senha (use variáveis de ambiente no projeto real)
const transporter = nodemailer.createTransport({
  service: "gmail", // ou outro serviço SMTP
  auth: {
    user: process.env.SMTP_USER || "seuemail@gmail.com",
    pass: process.env.SMTP_PASS || "suasenha",
  },
});

interface FormData {
  [key: string]: string;
}

export async function sendEmail(
  formData: FormData,
  fileBuffer: Buffer,
  fileName: string
) {
  const mailOptions = {
    from: process.env.SMTP_USER || "seuemail@gmail.com",
    to: "danielgfgonsales@gmail.com", // altere para onde o orçamento deve ir
    subject: `Novo orçamento: ${formData.assunto || "sem assunto"}`,
    text: `
Novo orçamento recebido:

Nome: ${formData.nome}
Empresa: ${formData.empresa}
CNPJ: ${formData.cnpj}
Cargo: ${formData.cargo}
E-mail: ${formData.email}
Telefone: ${formData.telefone}
Produto: ${formData.produto}
Assunto: ${formData.assunto}

Mensagem:
${formData.mensagem || formData.descricao || "Sem mensagem"}
    `,
    attachments:
      fileBuffer.length > 0
        ? [
            {
              filename: fileName,
              content: fileBuffer,
            },
          ]
        : [],
  };

  console.log("Dados do form:", formData);
  console.log("Nome arquivo:", fileName);

  await transporter.sendMail(mailOptions);
}
