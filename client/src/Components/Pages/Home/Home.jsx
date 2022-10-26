import Navbar from "Components/Features/Navbar/Navbar";
import UsersCards from "Components/Features/UsersCards/UserCards";
import UsersContextProvider from "Contexts/usersContext";

const Home = () => {
  return (
    <UsersContextProvider>
      <Navbar />
      <UsersCards/>
    </UsersContextProvider>
  );
};

export default Home;
