import React,{ createContext , useState } from 'react'

const ThemeContext=createContext()

function ThemeProvider({child}){
    const [theme , setTheme] = useState("light")
const toggle=()=> setTheme((pre)=>(pre === 'light'? 'dark' :'light') )
    
    return(
        <>
<ThemeContext.Provider value={{theme , toggle}}>
    {child}
</ThemeContext.Provider>
        
        </>
    )
    
}
export {ThemeProvider , ThemeContext}