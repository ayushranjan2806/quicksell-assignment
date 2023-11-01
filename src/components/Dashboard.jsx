import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; 
import "../styles/Dashboard.css";
import Card from "../components/Card";
import quick from "../images/quick_sell.jpg"



const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "left" }}
                  >
                    {!user ? (
                      <BsReception4 />
                    ) : (
                      <>
                        <div className="image">
                          <img
                            src={quick}
                            alt="QuickSell"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span style={{ letterSpacing: "1px" }}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
