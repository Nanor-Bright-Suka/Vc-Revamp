


import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function ToastNot() {
  return (
    
    <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          style: {
            fontSize: '14px',
            padding: '12px 16px',
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#0f766e',
            },
          },
          error: {
            style: {
              background: '#b91c1c',
            },
          },
        }}
      />
  )
}
