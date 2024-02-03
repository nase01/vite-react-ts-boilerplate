import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl mb-3">Home</h2>
      <Link className="custom_link" to="/about">More Info</Link>
    </div>
  )
}

export default Home