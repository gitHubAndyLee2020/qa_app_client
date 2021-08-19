import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION, ANSWER } from '../../../constants/postTypes'
import { downvoteQuestion } from '../../../actions/questionActions'
import { downvoteAnswer } from '../../../actions/answerActions'

export default function DownvotePost({ post, type }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleDownvote = () => {
    switch (type) {
      case QUESTION:
        dispatch(downvoteQuestion(post._id, post, user))
        break
      case ANSWER:
        dispatch(downvoteAnswer(post._id, post, user))
        break
      default:
        break
    }
  }

  return (
    <div>
      {user ? (
        <button onClick={handleDownvote}>
          {`Downvote${post.downvotes.length > 1 ? 's' : ''}`} {post.downvotes.length}
        </button>
      ) : (
        <p>
          {`Downvote${post.downvotes.length > 1 ? 's' : ''}`} {post.downvotes.length}
        </p>
      )}
    </div>
  )
}
