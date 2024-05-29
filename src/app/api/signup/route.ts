import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../../../lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const salty = bcrypt.genSaltSync()
  const body = await request.json()
  const { email, password } = body


  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salty)

      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "User already Exists" }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const token = jwt.sign({
    email: user.email,
    id: user.email,
    time: Date.now(),
  },
    'hello',
    { expiresIn: '8h' }
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
}


