import { useState, useEffect } from "react"

 
  /**
   * Hook to get the current theme color based on the url parameters.
   * @returns an object with the themeColor property.
   * @example
   * const { themeColor } = useTheme()
   * // themeColor is '#111' if the url parameter is 'dark'
   * // or 'ghostwhite' if the url parameter is 'light'
   */
export const useTheme = () => {

  const [urlParams, _] = useState(new URLSearchParams(window.location.search))
  const [themeColor, setThemeColor] = useState('ghostwhite')


  useEffect(() => {
    if(urlParams.get('theme') === 'dark') {
      setThemeColor('#111')
    }
    else if(urlParams.get('theme') === 'light') {
      setThemeColor('ghostwhite')
    }
  }, [])


  useEffect(() => {
    document.body.className = 'theme-' + themeColor
  }, [themeColor])


  return {
    themeColor,
  }
}