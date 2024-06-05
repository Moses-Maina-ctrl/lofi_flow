import { validateRoute } from "../../../../lib/auth";

export default validateRoute((user) => {
  return new Response(JSON.stringify(user), {
    headers: {
      'Content-type': 'application/json'
    }
  })
})
