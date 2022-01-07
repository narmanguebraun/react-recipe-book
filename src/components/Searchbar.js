import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // useHistory is useNavigate since react-router-dom v6

import './Searchbar.css'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()   // const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate.push(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  )
}
