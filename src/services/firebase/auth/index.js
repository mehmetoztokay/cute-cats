import { firebase_app } from '../config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

// Initialize app
const auth = getAuth(firebase_app)

// Register service
export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)

  return user
}

// Login service
export const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)

  return user
}

// Logout
export const logout = async () => {
  await signOut(auth)

  return true
}
