import { useEffect } from 'react';
import { handleSignIn } from '../hooks/handleSignIn'

export const LoginPage = () => {

  const { SignIn } = handleSignIn()

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
      callback: SignIn
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "dark",
        style: "large"
      }
    )

    google.accounts.id.prompt();
  }, [])

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <p className="fs-5 text-center">Solo se admiten cuentas con el siguiente dominio: <span className="fw-bold">uaeh.edu.mx</span></p>
            {/*//? Google Sign In */}
            <div id="signInDiv" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }} className="mb-4"></div>
            {/* //? Google Sign In */}
            <a href="https://accounts.google.com/signin/v2/recoveryidentifier?utm_source=hc_exp0722c&flowName=GlifWebSignIn&flowEntry=AccountRecovery" target='_blank' className="alert-link">Recuperación de la cuenta</a>
          </div>
        </form>
      </div>
    </>
  )
}
