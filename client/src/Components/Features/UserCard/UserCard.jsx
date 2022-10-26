import styles from "./UserCard.module.scss" ;

const setProfileImage = (gender) => {
  return gender === "male" ? "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png" : "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_960_720.png" ;
}

const UserCard = ({ user }) => {
   return (
      <section className={styles.userCardContainer}>
       <img src={setProfileImage(user.gender)} alt=""/>
       <p> {user.firstName} {user.lastName} </p>
       <p>{user.email}</p>
       <span>&#x1F5D1;</span>
      </section>
   )
}

export default UserCard ;