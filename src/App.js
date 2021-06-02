import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import AddSignature from './components/AddSignature'
import FileBrowser from './components/FileBrowser'
import { useState, useEffect } from 'react'

function App() {

  const [signatures, setSignatures] = useState([])
  const [showAddSignaturePopup, setShowAddSignaturePopup] = useState(false)
  
  useEffect(() => {
    const getSignatures = async () => {
      const signaturesFromServer = await fetchSignatures()
      setSignatures(signaturesFromServer)
    }

    getSignatures()

  }, [])

  // Fetch Signatures from Server
  const fetchSignatures = async () => {
    const res = await fetch('http://localhost:5000/signatures')
    const data = await res.json()
    return data
  }

  // Fetch Signature from Server
  const fetchSignature = async (id) => {
    const res = await fetch(`http://localhost:5000/signatures/${id}`)
  }

  // Delete Signature from Server
  const deleteSignature = async (id) => {
    console.log('Deleted')
    await fetch(`http://localhost:5000/signatures/${id}`, {
      method: 'DELETE',
    })
    setSignatures(signatures.filter((signature) => signature.id !== id))
  }

  // Access deeper into the Server
  const signatureOnView = () => {
    console.log('Viewed')
  }

  // Add Signature into the Server
  const addSignature = async (signature) => {
    const res = await fetch('http://localhost:5000/signatures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signature)
    })
    const data = await res.json()
    setSignatures([...signatures, data])
  }

  return (
    <Router>
      <div className="container">
        <Header title='Container Signature Server'
          onAddClick={() => setShowAddSignaturePopup(!showAddSignaturePopup)}
          showAdd={showAddSignaturePopup} />
        {showAddSignaturePopup && <AddSignature onAdd={addSignature} />}
        <Route path='/' exact render={(props) => (
          <>
            <FileBrowser signatures={signatures} onView={signatureOnView} onDelete={deleteSignature} />

          </>
        )} />
        
      </div>
    </Router>
  );

}

export default App;
