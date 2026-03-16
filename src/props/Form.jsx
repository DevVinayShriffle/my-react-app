import {useState} from 'react';

function Form(){
  const [form, setForm] = useState({})

  function handleChange(e){
    setForm((values)=>({...values, [e.target.name]: e.target.value}))
  }

  console.log(form)
  return (
    <>
    <form>
      <label>Enter your name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
        />
      </label>

      <label>Enter your degree:
        <input
          type="text"
          name="degree"
          onChange={handleChange}
        />
      </label>
    </form>
    </>
  )
}

export default Form;