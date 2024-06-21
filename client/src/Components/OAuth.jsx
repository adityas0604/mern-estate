import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/userSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const [isLoading, setIsLoading] = useState(false); //
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClink = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true); //
    
        try{
            
            
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
            })

        

            const data = await res.json() ;
            dispatch(signInSuccess(data))
            setIsLoading(false); 
            navigate('/')

            }  catch (error) {
            console.log("Could not sign in with google", error)
        }

    }

  return (
    
     <button onClick={handleGoogleClink} disabled={isLoading} type='button' className='bg-red-700 rounded-lg text-white p-3 uppercase hover:opacity-95'> {isLoading ? 'Loading...' : 'Continue with Google'} </button> 
    
  )
}
