import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { certifications as staticCertifications, projects as staticProjects } from '../data/portfolioData'
import { firebaseDb, firebaseReady } from '../firebase/firebase'

const PortfolioDataContext = createContext(null)

function orderedDocuments(snapshot) {
  return snapshot.docs
    .map((document) => ({ id: document.id, ...document.data() }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export function PortfolioDataProvider({ children }) {
  const [initialized, setInitialized] = useState(false)
  const [projectDocuments, setProjectDocuments] = useState([])
  const [certificationDocuments, setCertificationDocuments] = useState([])

  useEffect(() => {
    if (!firebaseReady || !firebaseDb) return undefined

    const stopMeta = firebaseDb.doc('settings/content').onSnapshot((snapshot) => {
      setInitialized(snapshot.exists && snapshot.data()?.initialized === true)
    }, (error) => console.error('Portfolio settings could not be loaded:', error))

    const stopProjects = firebaseDb.collection('projects').onSnapshot((snapshot) => {
      setProjectDocuments(orderedDocuments(snapshot))
    }, (error) => console.error('Portfolio projects could not be loaded:', error))

    const stopCertifications = firebaseDb.collection('certifications').onSnapshot((snapshot) => {
      setCertificationDocuments(orderedDocuments(snapshot))
    }, (error) => console.error('Portfolio certifications could not be loaded:', error))

    return () => {
      stopMeta()
      stopProjects()
      stopCertifications()
    }
  }, [])

  const value = useMemo(() => ({
    projects: initialized ? projectDocuments : staticProjects,
    certifications: initialized ? certificationDocuments : staticCertifications,
    initialized,
    firebaseReady,
  }), [initialized, projectDocuments, certificationDocuments])

  return <PortfolioDataContext.Provider value={value}>{children}</PortfolioDataContext.Provider>
}

export function usePortfolioData() {
  const context = useContext(PortfolioDataContext)
  if (!context) throw new Error('usePortfolioData must be used inside PortfolioDataProvider')
  return context
}
