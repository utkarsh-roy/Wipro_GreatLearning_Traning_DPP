import { useEffect, useState } from 'react'

const API = 'http://localhost:4000/todos'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')
  const [searchType, setSearchType] = useState('name')
  const [updateDescription, setUpdateDescription] = useState('')
  const [selectedTodoId, setSelectedTodoId] = useState(null)
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    setLoading(true)
    try {
      const res = await fetch(API)
      const data = await res.json()
      setTodos(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function addTodo(e) {
    e.preventDefault()
    if (!input.trim()) return
    const newTodo = { title: input.trim(), completed: false }
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
    const created = await res.json()
    setTodos(prev => [...prev, created])
    setInput('')
  }

  async function removeTodo(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  async function toggle(id) {
    const t = todos.find(x => x.id === id)
    if (!t) return
    const updated = { ...t, completed: !t.completed }
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    })
    setTodos(prev => prev.map(p => (p.id === id ? updated : p)))
  }

  async function updateTodoDescription(id) {
    if (!updateDescription.trim()) return
    const todo = todos.find(x => x.id === id)
    if (!todo) return
    const updated = { ...todo, title: updateDescription.trim() }
    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    })
    const updatedTodo = await res.json()
    setTodos(prev => prev.map(p => (p.id === id ? updatedTodo : p)))
    setUpdateDescription('')
    setSelectedTodoId(null)
  }

  async function searchTodos() {
    if (!searchInput.trim()) {
      setFilteredTodos(todos)
      return
    }
    
    if (searchType === 'name') {
      const results = todos.filter(t =>
        t.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      setFilteredTodos(results)
    } else if (searchType === 'id') {
      const id = parseInt(searchInput)
      const results = todos.filter(t => t.id === id)
      setFilteredTodos(results)
    }
  }

  const displayTodos = filteredTodos.length > 0 && searchInput.trim() ? filteredTodos : todos

  return (
    <div>
      <h2>Todo App</h2>

      <form onSubmit={addTodo}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add todo" />
        <button>Add</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <div>
          <select value={searchType} onChange={e => setSearchType(e.target.value)}>
            <option value="name">By Name</option>
            <option value="id">By ID</option>
          </select>
          <input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search" />
          <button onClick={searchTodos}>Search</button>
          <button onClick={() => { setSearchInput(''); setFilteredTodos([]); }}>Clear</button>
        </div>
      </div>

      {loading ? <p>Loading...</p> : (
        <ul style={{ marginTop: '20px' }}>
          {displayTodos.map(t => (
            <li key={t.id}>
              <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                [{t.id}] {t.title}
              </span>
              {selectedTodoId === t.id ? (
                <>
                  <input value={updateDescription} onChange={e => setUpdateDescription(e.target.value)} placeholder="New desc" />
                  <button onClick={() => updateTodoDescription(t.id)}>Update</button>
                  <button onClick={() => { setSelectedTodoId(null); setUpdateDescription(''); }}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => setSelectedTodoId(t.id)}>Edit</button>
                  <button onClick={() => removeTodo(t.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
