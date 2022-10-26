import styles from "./Navbar.module.scss" ;

const Navbar = () => {

  return (
    <section className={styles.navbarContainer}>
      <p>Users ( 3 )</p>
     <button className={styles.addUserButton}> Create New </button>
    </section>
  )
}

export default Navbar ;