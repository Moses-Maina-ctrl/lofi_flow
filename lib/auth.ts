import jwt from 'jsonwebtoken'
import prisma from './prisma'
import { NextRequest } from 'next/server'
import { User } from '@prisma/client'

type RequestHandler = (user: User) => Response | Promise<Response>


export const validateRoute = (handler: RequestHandler) => {
  return async function POST(request: NextRequest) {
    const token = request.cookies.get('TRAX_ACCESS')?.value

    if (token) {
      let user
      try {
        const decoded = jwt.verify(token, 'hello')
        if (typeof decoded === 'string') {
          return new Response(JSON.stringify({ error: 'Invalid Token' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json'
            }
          })
        } else {
          const userId = decoded.id
          user = await prisma.user.findUnique({
            where: { id: userId },
          })
        }
        if (!user) {
          throw new Error("User doesn't exist")
        }
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Not Authorized' }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      return handler(user)
    }
    return new Response(JSON.stringify({ error: 'Not Authorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
