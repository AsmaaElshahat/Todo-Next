import React from 'react'
import Link from 'next/link';
import { PlusCircle, LogIn, UserPlus } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-gray-900 p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold whitespace-nowrap">
          To-Do App
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/tasks" className="hover:underline text-lg">Tasks</Link>          
        
          <Link href="/signin" className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition">
            <LogIn className="w-5 h-5 mr-2" /> Sign In
          </Link>
        
          <Link href="/signup" className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition">
            <UserPlus className="w-5 h-5 mr-2" /> Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
