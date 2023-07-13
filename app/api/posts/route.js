import { NextResponse } from "next/server"
import connectdb from '../../../utils/db'
import Post from '../../models/Post'

export const GET = async () => {
try {
    await connectdb()
    const posts = await Post.find()
    return new NextResponse(JSON.stringify(posts),{status:200})

} catch (error) {
    return new NextResponse("Database Error", {status:500})
    }
}