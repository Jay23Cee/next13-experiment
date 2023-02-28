import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServers } from "dns"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   if (req.method === "GET") {
//     const session = await getServerSession(req, res, authOptions)
//     if (!session) {
//       return res
//         .status(401)
//         .json({ message: "Please sign in " })

//     }


//     //get auth users posts
//     try {
//       const data = await prisma.user.findUnique({
//         where:{
//             email: session.user?.email,
//         },
//         include:{
//             Post:{
//                 orderBy:{
//                     createdAt: 'desc'
//                 },
//                 include:{
//                     Comment: true,
//                 }
//             }
//         }
//       })
     
//       res.status(200).json(data)
//     } catch (err) {
//       res.status(403).json({ err: "Error has occured while getting Posts" })
//     }
//   }

if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions)
    console.log("This is the sessoin", session)
    if (!session) return res.status(401).json({message:"Please Sign in"})
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session.user?.email,
        },
        include: {
          post: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              comment: true,
            },
          },
        },
      })

      return res.status(200).json(data)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post " })
    }
  }
}