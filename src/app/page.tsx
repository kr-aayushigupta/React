import Image from "next/image";
import AddTaskWithoutLocalStorage from "@/app/Components/LocalStorageUsage/AddTaskWithoutLocalStorage";
import AddTaskWithLocalStorage from "@/app/Components/LocalStorageUsage/AddTaskWithLocalStorage";
import { ThemeProvider } from "./Components/UserReusableComponents/ThemeContext";
import UserCard from "./Components/UserReusableComponents/UserCard";

import UserList from "./Components/UserReusableComponents/UserLists";
import App from "./Components/PropsLearnt/PropsComponent";
import Quiz from "./Components/Quiz/Quiz";
export default function Home() {
  return (
    <ThemeProvider>
      <div className="mx-auto h-screen bg-[url('/bg1.jpg')] bg-center bg-cover ">
        <div className="flex justify-center items-center gap-4">
          {/* <AddTaskWithoutLocalStorage/>
      <AddTaskWithLocalStorage/> */}
       <Quiz />
        </div>

        {/* <UserCard/> */}
        {/* <UserList/> */}

        {/* <App/> */}
       
      </div>
    </ThemeProvider>
  );
}
