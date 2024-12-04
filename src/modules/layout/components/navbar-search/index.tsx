"use client"

import { Input } from "@medusajs/ui"
import { useRouter, usePathname } from "next/navigation"
import { useState, FormEvent } from "react"
import { MicroscopeIcon as MagnifyingGlassIcon } from 'lucide-react'

const NavbarSearch = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!searchTerm) return

    const countryCode = pathname.split('/')[1]
    router.push(`/${countryCode}/store?q=${encodeURIComponent(searchTerm.trim())}`)

    setSearchTerm("")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[300px] relative">
      <div className="relative">
        <Input
          type=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Find a test or checkup"
          className="w-full pr-10 pl-4 py-2 rounded-full border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-600 transition-colors duration-200"
          disabled={!searchTerm.trim()}
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

export default NavbarSearch

