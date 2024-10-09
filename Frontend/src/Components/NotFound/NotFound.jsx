import { Link } from 'react-router-dom';
import img from '../../assets/download.jpg'

export default function NotFound() {
  return (
    <div className="text-center">
      <h1>Oops! You seem to be lost.</h1>
      <span>Here are some useful links:</span>
      <Link className="text-blue-700 text-xl mx-3" to="/">
        Register
      </Link>{' '}
      <Link className="text-blue-700 text-xl" to="/login">
        Login
      </Link>
      <img className="w-screen h-screen" src={img} alt="" />
    </div>
  );
}
