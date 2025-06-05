import Image from "next/image";
import AddTaskWithoutLocalStorage from "@/app/Components/LocalStorageUsage/AddTaskWithoutLocalStorage";
import AddTaskWithLocalStorage from "@/app/Components/LocalStorageUsage/AddTaskWithLocalStorage"
import { ThemeProvider } from "./Components/UserCard/ThemeContext";
import UserCard from "./Components/UserCard/UserCard";

import UserList from "./Components/UserCard/UserLists";
import App from "./Components/PropsLearnt/PropsComponent";

export default function Home() {
  return (
    <ThemeProvider>
    <div className="mx-auto h-screen bg-[url('/bg1.jpg')] bg-center bg-cover ">

      <div className="flex justify-center items-center gap-4">
           {/* <AddTaskWithoutLocalStorage/>
      <AddTaskWithLocalStorage/> */}

      </div>
   

      {/* <UserCard/> */}
      {/* <UserList/> */}

            <App/>
    </div>
    </ThemeProvider>
  );
}
