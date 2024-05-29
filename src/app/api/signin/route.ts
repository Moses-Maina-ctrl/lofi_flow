import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../../../lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  })
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({
      id: user.id,
      email: user.email,
      time: Date.now(),
    },
      'hello', {
      expiresIn: '8h',
    },
    )
    cookies().set('Set-Cookie', cookie.serialize('TRAX_ACCESS_TOKEN', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }))
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    return new Response(JSON.stringify({ error: 'Email or Password is Incorrect' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
