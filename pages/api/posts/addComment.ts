import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServers } from "dns"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions)
    console.log("This is the sessoin", session)
    if (!session) return res.status(401).json({message:"Please Sign in"})
    const prismaUser = await prisma.user.findUnique({
        where:{email: session?.user?.email},
    })
    try {
    //  ADD COMMENT
    const {title, postId} = req.body.data
   
    if(!title.length){
        return res.status(401).json({message:"Please enter "})
    }
const result = await prisma.comment.create({
    data:{
        message: title,
        userId: prismaUser?.id,
        postId,
    },
})
console.log(" looking for post comment",result)
res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while deleting post " })
    }
  }
}