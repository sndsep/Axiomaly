// src/hooks/use-course-discussion.ts
import { useState, useCallback, useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'

export function useCourseDiscussion(courseId: string) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`/api/courses/${courseId}/discussion`)
      if (!response.ok) throw new Error('Failed to fetch discussions')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load discussions",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }, [courseId, toast])

  const createPost = async (content: string) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/discussion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      })
      if (!response.ok) throw new Error('Failed to create post')
      const newPost = await response.json()
      setPosts(prev => [newPost, ...prev])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive"
      })
    }
  }

  const createReply = async (postId: string, content: string) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/discussion/${postId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      })
      if (!response.ok) throw new Error('Failed to create reply')
      const newReply = await response.json()
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? { ...post, replies: [...post.replies, newReply] }
          : post
      ))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create reply",
        variant: "destructive"
      })
    }
  }

  const likePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/discussion/${postId}/like`, {
        method: 'POST'
      })
      if (!response.ok) throw new Error('Failed to like post')
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? { ...post, likes: post.likes + 1, isLiked: true }
          : post
      ))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to like post",
        variant: "destructive"
      })
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return {
    posts,
    isLoading,
    createPost,
    createReply,
    likePost,
    reportPost: async (postId: string) => {
      // Implementation for reporting posts
    }
  }
}

// src/app/api/courses/[courseId]/discussion/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const posts = await prisma.discussionPost.findMany({
      where: { courseId: params.courseId },
      include: {
        author: true,
        replies: {
          include: {
            author: true
          }
        },
        likes: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch discussions' },
      { status: 500 }
    )
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { content } = await req.json()
    const post = await prisma.discussionPost.create({
      data: {
        content,
        courseId: params.courseId,
        authorId: session.user.id
      },
      include: {
        author: true,
        replies: true,
        likes: true
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}