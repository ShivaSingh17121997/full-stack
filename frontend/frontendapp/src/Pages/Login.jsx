import React from 'react'

export const Login = () => {
    const [data, setData] = useState(initialState)
  return (
    <div>
        <input type="email" placeholder='email' /> <br/>
        <input type="password" placeholder='password' /> <br/>
        <button>Submit</button>
    </div>
  )
}
