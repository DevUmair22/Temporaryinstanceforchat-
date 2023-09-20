import React, { useState, useEffect, useMemo } from "react";

import ReactPaginate from "react-paginate";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import moment from "moment/moment";
const itemsPerPage = 10; // Number of items to display per page


export default function AgentHistoryPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loginData();
  }, []);
  const loginData = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("sssssss", user?.user_sessions);
    try {
      // const url= `http://172.20.10.2:8000/core/total-time-logged-in/`;
      // const data= {data:data.user_sessions};
      // const response=await axios.get(url,data);
      // console.log("absurd", response);

      const response = await axios.get(
        `http://172.20.10.2:8000/core/total-time-logged-in/`
      );
      console.log("AgentHistory logIn time=========>", response);

      setData(response.data.user_sessions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("arrayData", setData);



  const toggleOptions = (index) => {
    setExpandedRowIndex(index);
    setShowOptions(true);

    setTimeout(() => {
      setShowOptions(false);
      setExpandedRowIndex(null);
    });
  };

  const handleNameChange = (value, index) => {
    const newData = [...data];
    newData[index].name = value;
    setData(newData);
  };

  const handleLoginChange = (value, index) => {
    const newData = [...data];
    newData[index].loginTime = value;
    setData(newData);
  };
  const handlelogoutChange = (value, index) => {
    const newData = [...data];
    newData[index].logoutTime = value;
    setData(newData);
  };
  const handleClick = () => {
    window.location.href = "./user"; // implementation details
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const activeAccounts = useMemo(() => {
    return data?.filter((account) => {
      return account.is_active;
    });
  }, [data]);
 
  return (
    <div>
    
      <div style={{ background: "#F4F4F5" }} className="min-h-full ">
        <div className="flex mr-32 justify-around">
          
        </div>
        <div className="activeagent rounded-lg bg-white shadow-lg ml-10 mr-44 mt-8 m-auto justify-start p-4">
      

          <h1 className="text-2xl font-bold">Agent History</h1>

          <table className="table-auto text-left w-full mt-8 border-collapse h-52">
            <thead className="bg-[#3E97CF] py-4 border">
              <tr className="h-14 p-4 border">
                <th className="border border-#B9B9B9 pl-4 text-white	">Name</th>
                <th className="border pl-4 text-white	">LoginTime</th>
                <th className="border pl-4 text-white	">LogoutTime</th>

                <th className="border pl-4 text-white	">
                  Last Qurey Answer Time
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                .map((val, index) => (
                  <React.Fragment key={index}>
                    <tr className="border ">
                      <td className="border pl-5 py-1">{val.name}</td>
                      <td className="border pl-5 py-1">
                        {/* {moment(val.login_time).format("DD/MM/YYYY")}{" "}
                        {moment(val.login_time).format("HH:MM")} */}
                        {moment(val.login_time).format("LLL")}
                      </td>
                      <td className="border pl-5 py-1">
                      
                        {moment(val.logout_time).format("LLL")}
                      </td>
                      <td className="border pl-5 py-1">{val.AnswerTime}</td>
                    </tr>
                    {expandedRowIndex === index && (
                      <tr key={`${index}-edit`} className="border ">
                        <td colSpan="2" className="border pl-5 py-1">
                          <input
                            type="text"
                            value={val.name}
                            onChange={(e) =>
                              handleNameChange(e.target.value, index)
                            }
                          />
                        </td>
                        <td colSpan="2" className="border pl-5 py-1">
                          <input
                            type="text"
                            value={val.loginTime}
                            onChange={(e) =>
                              handleLoginChange(e.target.value, index)
                            }
                          />
                        </td>
                        <td colSpan="2" className="border pl-5 py-1">
                          <input
                            type="text"
                            value={val.logoutTime}
                            onChange={(e) =>
                              handlelogoutChange(e.target.value, index)
                            }
                          />
                        </td>
                        <td className="pl-8 justify-center py-2 flex">
                        
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end w-5/6 mt-4">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination-container"}
            previousLinkClassName={"previous-link"}
            nextLinkClassName={"next-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
}
