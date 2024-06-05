import { auth } from "../../lib/mutation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm: React.FC<{ mode: 'Sign In' | 'Sign Up' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setisLoading(true)
    const user = await auth(mode, { email, password })
    setisLoading(false)
    router.push('/')

  }
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl" >
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder=" Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder=" Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-control mt-6">
          <button className={`btn btn-primary  ${isLoading ? 'loading' : ''}`} type="submit"  >{mode}</button>
        </div>
      </form>
    </div>
  )

}

export default AuthForm
