import styles from "../../components/css/loading.module.sass"

export default function Loading(props) {
  return (
    <div className={props.Loading ? styles.loading__container: styles.load__none}>
      <h1>now Loading</h1>
    </div>
  )
}
