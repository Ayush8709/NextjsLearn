import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name="Ayush" />
      <ThiredComponent third="3" />
      <ThiredComponent />
    </main>

  );
}

const User = ({ name }) => {
  return (
    <div>
      <h2>Name is {name}</h2>
    </div>
  )
}

const ThiredComponent = (props) => {
  return (
    <div>
      <h1>This is Third {props.third} Component</h1>
    </div>
  )
}
