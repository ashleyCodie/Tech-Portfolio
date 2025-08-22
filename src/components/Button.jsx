import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button type="button" class="text-black bg-gradient-to-r from-purple-300 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-extrabold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 hover:underline">{text}</button>
    </div>
  )
}

export default Button