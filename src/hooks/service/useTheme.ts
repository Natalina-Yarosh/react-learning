import { useState, useEffect } from "react"

  /**
   * useTheme returns the current theme color and a function to set the theme color
   * The theme color is determined by the theme parameter in the URL
   * The default theme color is #333 (dark)
   * The theme color is used to set the className of the body element to "theme-<color>"
   * @returns {[string, (color: string) => void]} - The theme color and a function to set the theme color
   * @example
   * const [themeColor, setThemeColor] = useTheme()
   * // themeColor is '#333'
   * setThemeColor('light')
   * // themeColor is 'ghostwhite'
   * // document.body.className is 'theme-ghostwhite'
   */
export const useTheme = () => {

  const [themeColor, setThemeColor] = useState('#333')
  const [urlParams, _] = useState(new URLSearchParams(window.location.search))


  useEffect(() => {
    if(urlParams.get('theme') === 'dark') {
      setThemeColor('#333')
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