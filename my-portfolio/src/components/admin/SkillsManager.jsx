import { useState, useEffect } from 'react'

export default function SkillsManager() {
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => res.json())
      .then((data) => setSkills(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false))
  }, [])

  const save = async () => {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch('/api/skills', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(skills),
      })
      if (res.ok) setMessage('Skills saved successfully!')
      else setMessage('Failed to save. Are you logged in?')
    } catch {
      setMessage('Error saving skills.')
    } finally {
      setSaving(false)
    }
  }

  const addSkill = () => {
    const trimmed = newSkill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed])
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill()
    }
  }

  if (loading) return <p className="text-gray-400">Loading skills...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Skills</h2>
        <button
          onClick={save}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save All'}
        </button>
      </div>

      {message && (
        <div className="bg-blue-500/20 border border-blue-500 text-blue-300 rounded-lg p-3 mb-4 text-sm">
          {message}
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addSkill}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          + Add
        </button>
      </div>

      {skills.length === 0 ? (
        <p className="text-gray-400">No skills yet. Add one or seed the initial data.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="text-red-400 hover:text-red-300 font-bold"
              >
                x
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
