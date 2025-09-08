import { useContext } from "react";

import {ThemeContext} from './ThemeContext'
function ThemeHeader(){
    const [theme , toggle] = useContext(ThemeContext)
    return (
        <div>
        <button onClick={toggle} style={{
            background:theme==='light'?'#fff' : '#000000' ,
            color:theme==='light'?'#000' : '#fff',
            padding:'8px 12px',
            border:'1px solid black'
        }}>Toggle</button>
</div>
    )
}
export default ThemeHeader