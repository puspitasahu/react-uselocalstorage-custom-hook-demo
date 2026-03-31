import {Card,Button,Greeting,Badge} from "@components"
export default function App(){
  return (
    <div>
      <h1>Barrel Demo</h1>
      <Badge text="New"/>
      <Card title="Welcome">
        <Greeting name="Lily"/> 
      </Card>
      <Card title = "Actions">
        <Button label="Click Me" onClick = { () => alert('Hello')}></Button>
      </Card>
    </div>
  )
}
