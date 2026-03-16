import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

  const [firstName, setFirstName] = useState('');
  // Hook for programmatic navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    if (firstName) {
      // Navigate to the dynamic path /:firstname
      navigate(`/${firstName}`);
    }
  };

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
    <h1>Home Page</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Enter your first name:</label>
      <input
      type="text"
      id="firstName"
      value={firstName}
      onChange={handleInputChange}
      placeholder="First Name"
      required
      />
      <button type="submit">Go to Profile</button>
    </form>
    </>
  );
}
export default Home;