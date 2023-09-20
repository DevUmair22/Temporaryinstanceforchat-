import React from "react";
import Sidbar from "../components/sidbar/sidbar";
import Header from "../components/Header/Header";
import Rightblock from "../components/Righticons/Rightblock";
import AgentHistoryPage from "../Agentpages/AgentHistoryPage";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Agenthistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://172.20.10.2:8000/core/user/");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="home border">
     
      <div className=" w-full">
        <div className="relative flex">
          <div className=" ">
            <div>
              <Sidbar />
            </div>
          </div>
          <div className="w-full ">
            <Header />

            <AgentHistoryPage />
          </div>

          <div className="w-32 bg-background: #F4F4F5 absolute mt-0 right-12 h-full">
            <Rightblock />
          </div>
        </div>
      </div>
    </div>
  );
}
