// src/components/courses/detail/CourseDiscussion.tsx
import { useCourseDiscussion } from '@/hooks/use-course-discussion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/forms/textarea'
import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import { MessageSquare, ThumbsUp, Flag } from 'lucide-react'

interface Post {
  id: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
  }
  createdAt: Date
  likes: number
  replies: Reply[]
  isLiked: boolean
}

interface Reply {
  id: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
  }
  createdAt: Date
}

export const CourseDiscussion = ({ courseId }: { courseId: string }) => {
  const { 
    posts,
    isLoading,
    createPost,
    createReply,
    likePost,
    reportPost
  } = useCourseDiscussion(courseId)

  const [newPost, setNewPost] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim()) return
    await createPost(newPost)
    setNewPost('')
  }

  const handleSubmitReply = async (postId: string) => {
    if (!replyContent.trim()) return
    await createReply(postId, replyContent)
    setReplyContent('')
    setReplyingTo(null)
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <form onSubmit={handleSubmitPost}>
            <Textarea
              placeholder="Start a discussion..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={3}
              className="mb-4"
            />
            <Button type="submit" disabled={!newPost.trim()}>
              Post Discussion
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-row items-start gap-4 p-4">
              <Avatar src={post.author.avatar} alt={post.author.name} />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{post.author.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => reportPost(post.id)}>
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
                <p className="mt-2">{post.content}</p>
                <div className="flex gap-4 mt-4">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => likePost(post.id)}
                    className={post.isLiked ? 'text-blue-500' : ''}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(post.id)}
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Reply
                  </Button>
                </div>

                {/* Replies */}
                {post.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-4 border-l-2">
                    {post.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <Avatar
                          src={reply.author.avatar}
                          alt={reply.author.name}
                          className="w-8 h-8"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{reply.author.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Form */}
                {replyingTo === post.id && (
                  <div className="mt-4">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={2}
                      className="mb-2"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleSubmitReply(post.id)}
                        disabled={!replyContent.trim()}
                      >
                        Reply
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setReplyingTo(null)
                          setReplyContent('')
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}