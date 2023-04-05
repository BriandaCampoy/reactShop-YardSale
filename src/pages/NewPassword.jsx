import React from 'react'
import '@styles/NewPassword.scss'
import logo_main from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
  return (
    <div class="NewPassword">
    <div class="NewPassword-container">
        <img src={logo_main} alt="logo" class="logo"/>

        <h1 class="title">Create a new password</h1>
        <p class="subtitle">Enter a new password for you account</p>

        <form action="/" class="form">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" placeholder="*******" class="input input-password"/>

            <label for="new-password" class="label">Re-enter password</label>
            <input type="password" id="new-password" placeholder="*******" class="input input-password"/>

            <input type="submit" value="Confirm" class="primary-button login-button"/>
        </form>
    </div>
</div>
  )
}

export default NewPassword