export default function Home() {
  return (
    <main >
      <h1>multipal conmponent</h1>
      <User name='singh'/>
      <Name name='ayush'/>
    </main>

  );
}


const User = (props) => {
  return (
    <h1>This is User {props.name}</h1>
  )
}


const Name = ({name})=>{
  return (
    <h1>This is Name {name}</h1>
  )
}



