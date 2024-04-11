import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h2>Login Page</h2>
            <form>
                <div>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoCapitalize='off' placeholder='Enter Eamail'
                    className='form-control rounded-0' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login