import { NextResponse } from "next/server"
import connectdb from '../../../../utils/db'
import Post from '../../../models/Post'

export const GET = async (request,{params}) => {
   const {id} = params
try {
    await connectdb()
    const post = await Post.findById(id)
    return new NextResponse(JSON.stringify(post),{status:200})

} catch (error) {
    return new NextResponse("Database Error", {status:500})
    }
}