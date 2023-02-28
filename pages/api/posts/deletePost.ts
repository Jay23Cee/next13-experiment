import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServers } from "dns"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions)
    console.log("This is the sessoin", session)
    if (!session) return res.status(401).json({message:"Please Sign in"})
    try {
      // Delete a post
      const postId = req.body
      const result = await prisma.post.delete({
        where:{
            id:postId,
        },
      })

      return res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while deleting post " })
    }
  }
}