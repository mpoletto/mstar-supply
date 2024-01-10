import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { method } = req;

  if (method !== "POST") {
    return res.status(405).json({
      error: { message: `Method ${method} Not Allowed` },
    });
  }
  
  const schema = z.object({
    nome: z.string(),
    fabricante: z.string(),
    tipo: z.string(),
    descricao: z.string(),
  })

  const response = schema.safeParse(req.body)

  if (!response.success) {
    const { errors } = response.error;

    return res.status(400).json({
      error: { message: "Invalid request", errors },
    });
  }

  const { nome, fabricante, tipo, descricao } = response.data;

  return res.status(200).json({ message: "Success" });
}

