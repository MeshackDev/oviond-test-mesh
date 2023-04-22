import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

//components
import { ClientList } from '../components/ClientList'
import { Header } from '../components/Header'


export const Home = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/add/client");
  }; 

  return (
    <>
      <Header>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
          <Link to={"/"} class="flex items-center">
            <img src="/images/favicon.png" class="h-10 w-10" alt="Aveond Logo" />
          </Link>

          <div class="flex">
            <div class="relative hidden md:block bg-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search client"/>
            </div>
          </div>

          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleAdd}>Add Client</button>
        </div>
      </Header>

      <section>
        <ClientList/>
      </section>
    </>
  )
}
