import React, { useEffect, useState } from "react";
import LoggedInState from "../../navbar/LoggedInState";
import { get_user_data } from "../../../services/check loggedIn/get_user_data";
import { useNavigate } from "react-router";
import { IconMenu2 } from "@tabler/icons-react";

const AdminNavbar = ({collapsed, setBroken, settoggled, toggled, setcollapsed, broken}) => {
  const navigate = useNavigate();
  const [loggedData, setLoggedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await get_user_data();

      if ((res.status = 200)) {
        setLoggedData(res.data);
        console.log(res.data);
      }
    };

    fetchData();
  }, []);

  return (
    <nav
      className="row pe-1 pe-md-5 py-1 border-bottom justify-content-between w-100 px-3"
      style={{
        height: "80px",
      }}
    >
      <div className="col-3 col-lg-2 h-100 d-flex py-3 justify-content-center align-items-center gap-1 gap-md-3 ms-5 ms-md-0">
        <img
          src='/src/assets/logo2.png'
          style={{
            height: "50px",
            width: '150px'
          }}
          alt=""
        />

        <div>
        {broken && (
              <button
                className="iconHighlight rounded"
                onClick={() => {
                  settoggled(!toggled);
                }}
              >
                <IconMenu2 />
              </button>
            )}
{/* 
            {!broken && (
              <button
                className="iconHighlight rounded"
                onClick={() => {
                  setcollapsed(!collapsed);
                }}
              >
                <IconMenu2 />
              </button>
            )} */}
        </div>
      </div>

      <div className="col-lg-5 col-5 d-flex justify-content-end align-items-center gap-1 gap-md-3">
        {loggedData ? <LoggedInState userData={loggedData} /> : null}
      </div>
    </nav>
  );
};

export default AdminNavbar;
