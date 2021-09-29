import ListGroup from 'react-bootstrap/ListGroup'

export const Note = ({ note }) => {
  return (
    <ListGroup.Item>{note.content}</ListGroup.Item>
  )
}
