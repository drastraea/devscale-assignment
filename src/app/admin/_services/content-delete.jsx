"use server"

import { revalidatePath } from "next/cache";

const API_URL = process.env.API_URL; // Make sure this is set correctly

export async function deleteContent(id) {
  
  await fetch(API_URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([id]),
  });
  
  revalidatePath('admin')
  return {success: true}
}