import React, { useState, useContext, useEffect } from 'react'

const url = 'http://localhost:5000/cinemundo/movies'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [peliculas, setPeliculas] = useState([])

  const fetchMovies = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        const newPeliculas = data.map((item) => {
          const { id_movie, title, poster, synopsis, trailer, year } = item
          return {
            id: id_movie,
            title: title,
            image: poster,
            info: synopsis,
            trailer: trailer,
            year: year,
          }
        })
        setPeliculas(newPeliculas)
      } else {
        setPeliculas([])
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        peliculas,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
