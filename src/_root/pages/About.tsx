import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="text-2xl mb-3">About</h2>
      <p>This boilerplate includes tailwind and shadcn</p>
      <Link className="custom_link" to="/">Back</Link>
    </div>
  )
}

export default About