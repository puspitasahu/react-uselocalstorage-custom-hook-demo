import useLocalStorage from "./shared/useLocalStorage";

export default function App(){
  const [theme,setTheme] = useLocalStorage("theme", "light")
  return (
    <div>
      <h1>Current Theme {theme}</h1>
      <button onClick= { () => setTheme("dark")}>Dark Theme</button> 
      <br/>
      <br/>
      <button onClick= { () => setTheme("light")}>Light Theme</button>     
    </div>
  )
}
