// import { useEffect, useState } from "react";
// import api from "../api/axios";

// export default function useUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         // Axios handles the JSON conversion automatically
//         const response = await api.get("/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     }

//     fetchUsers();
//   }, []);

//   return users;
// }

import { useState, useEffect } from "react";
import api from "../api/axios";
import { showError, showInfo, showSuccess } from "../utils/toast";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState([false]);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true)
      try {
        showInfo("Fetching users...");
        const response = await api.get("/users");
        setUsers(response.data);
        showSuccess("Users loaded successfully!");
      } catch (error) {
        showError("Failed to fetch users");
        console.error(error);
      }finally{
        setIsLoading(false)
      }
    } // Added missing closing brace

    fetchUsers();
  }, []);

  return {users,isLoading};
}
