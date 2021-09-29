import React from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

export default function LoginForm ({ username, password, handleLogin, handlePasswordChange, handleUsernameChange }) {
  return (
    <Togglable buttonLabel='Show login'>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Control
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>Login</Button>
      </Form>
    </Togglable>
  )
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired
}
