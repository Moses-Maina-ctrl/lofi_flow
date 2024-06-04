"use client"
import AuthForm from "@/components/authForm";


const Signin = () => {
  return (

    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In</h1>
          <p className="py-6">Sign In to continue bopping to fire lofi beats</p>
        </div>
        <AuthForm mode="Sign In" />
      </div>
    </div>
  )
}

export default Signin
