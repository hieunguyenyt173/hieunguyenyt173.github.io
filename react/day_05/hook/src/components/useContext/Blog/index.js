import React,{useState, createContext} from 'react'
import Section from "./Section"
//props : theme :light/ dark
// Blog => Section => Paragraph
// Context  createContext()
// Provider: Cung cấp value cho context
// Consumer : Lấy giá trị từ context
export const ThemeContext = createContext();

function Blog() {
    const [theme, setTheme] = useState("dark");
    const [fontSize, setFontSize] = useState(16);
    const changeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark") 
    }
    const changeFontsize = () => {
        setFontSize(fontSize == 16 ? 24 : 16) 
    }
    const value = {
        theme, fontSize
    }
  return (
    <ThemeContext.Provider value={value}>
        <button onClick={changeTheme}>Toggle Theme</button>
        <button onClick={changeFontsize}>Toggle FontSize</button>
        <Section />
    </ThemeContext.Provider>
  )
}

export default Blog;