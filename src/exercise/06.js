// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target

    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInpu">Username:</label>
        <input
          type="text"
          id="userNameInput"
          onChange={handleChange}
          value={username}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
