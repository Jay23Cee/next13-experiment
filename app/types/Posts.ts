export type PostType = {
    title: string
    id: string
    createdAt : string
    user: {
        name: string
        image: string
    }
    comment?:{
        createdAt:string
        id:string
        postId:string
        userId:string
        message:string
        user?:{
            name?:string
            id?:string
            image?:string
        }

    }[]
}