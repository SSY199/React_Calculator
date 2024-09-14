import styles from "./Display.module.css";
const Display = ({displayValue}) => {
  return (
    <input type="text" classNameName={styles.display} value={displayValue} />
  )
}

export default Display;