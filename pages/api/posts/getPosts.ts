import prisma from "../../../prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
   
    try {
      const result = await prisma.post.findMany({
        include:{
            user:true,
            comment:true,
        },
        orderBy:{
            createdAt: "desc",
        },
      });
      res.status(200).json(result);
    } catch (error) {
      console.error("Error while fetching posts:", error);
      res.status(500).json({ error: "Unable to fetch posts. Please try again later." });
    }
  }
}
