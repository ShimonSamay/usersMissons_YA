import styles from "./UsersCards.module.scss" ;
import UserCard from "Components/Features/UserCard/UserCard";

const UsersCards = () => {

    const users = [
        {
            firstName:"Josh" ,
            lastName : "Chris" ,
            email : "Josh@email.com" ,
            gender : "male" ,
        } ,

        {
            firstName:"Lina" ,
            lastName : "Lewis" ,
            email : "Lina@email.com" ,
            gender : "female" ,
        } ,

        {
            firstName:"Ryan" ,
            lastName : "Richardson" ,
            email : "Ryan@gmail.com" ,
            gender : "male" ,
        } ,
    ]


  return (
    <section className={styles.cardsContainer}>
       {
          users.map((user) => <UserCard key={user.email} user={user}/>)
       }
    </section>
  )
}

export default UsersCards ;