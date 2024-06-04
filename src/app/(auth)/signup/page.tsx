"use client"

import AuthForm from "@/components/authForm"

const Signup = () => {
  return (

    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">Sign Up to start bopping to fire lofi beats</p>
        </div>
        <AuthForm mode="Sign Up" />
      </div>
    </div>
  )
}

export default Signup
