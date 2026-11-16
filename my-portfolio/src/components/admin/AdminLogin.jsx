import { useState } from 'react'
import { getSettings, oauthLogin, logout } from '@netlify/identity'

export default function AdminLogin({ user, authError }) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function signIn() {
    setLoading(true)
    setError('')
    try {
      const settings = await getSettings()
      if (!settings.providers?.google) {
        setError('Google sign-in is not available yet. Please try again once it is enabled.')
        return
      }
      if (user) await logout()
      oauthLogin('google')
    } catch {
      setError('Google sign-in could not be started. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Admin sign-in</h1>
        <p className="text-gray-300 mb-6">Sign in with the portfolio owner’s Google account to manage this portfolio.</p>
        {user && <p className="text-gray-300 mb-4" role="status">This account does not have access. Continue with the owner’s Google account.</p>}
        {(error || authError) && <p role="alert" className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg p-3 mb-4 text-sm">{error || authError}</p>}
        <button type="button" onClick={signIn} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50">
          {loading ? 'Connecting…' : 'Continue with Google'}
        </button>
        <p className="text-gray-400 text-sm mt-4">Your admin link appears automatically while you stay signed in.</p>
        <a href="/" className="text-blue-300 inline-block mt-4">Back to portfolio</a>
      </div>
    </div>
  )
}
