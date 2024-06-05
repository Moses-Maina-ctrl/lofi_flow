import fetcher from "./fetcher";

export const auth = (
  mode: 'Sign In' | 'Sign Up',
  body: { email: string, password: string }
) => {
  return fetcher(`/${urlLink(mode)}`, body)
}

const urlLink = (n: string) => {
  let url = n.split('').filter(char => char !== ' ').join('');
  return (url.toLowerCase())
}
