import prisma from "../../../prisma/client"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
   
    //getPost
    try {
      const result = await prisma.post.findMany({
        include:{
            user:true,
            Comment:true,
        },
        orderBy:{
            createdAt: "desc",
        },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error while fetching data" })
    }
  }
}