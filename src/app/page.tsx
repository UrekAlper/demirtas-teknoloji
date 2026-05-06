'use client'

import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/tr/')
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1A1A1A] px-6">
      <div className="text-center">
        <h1 className="font-display font-bold text-3xl text-white mb-4">
          DE|TECH
        </h1>
        <p className="font-body text-white/60 mb-6">
          Yönlendiriliyorsunuz...
        </p>
        <a
          href="/tr/"
          className="inline-flex bg-amber text-[#1A1A1A] px-6 py-3 font-display font-bold text-sm"
        >
          Siteye Git
        </a>
      </div>
    </main>
  )
}