"use server"
import { revalidatePath } from "next/cache";

const API_URL = process.env.API_URL

export async function deleteContent(id) {
  try {
    const response = await fetch(API_URL, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([id])
    })

    if (!response.ok) {
      throw new Error('Failed to delete content')
    }
    
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    return { success: false, message: error.message }
  }
}