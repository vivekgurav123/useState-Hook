import {useState} from 'react'
import {v4 as v4uuid} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onFormSubmit = e => {
    e.preventDefault()
    const newComment = {
      id: v4uuid(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentsList(prevState => [...prevState, newComment])
  }

  const onNameChange = event => setName(event.target.value)

  const onCommentChange = event => setCommentText(event.target.value)

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onFormSubmit}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onNameChange}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onCommentChange}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentsList.map(comment => (
        <CommentItem commentDetails={comment} key={comment.id} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
