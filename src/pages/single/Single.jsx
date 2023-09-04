import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/charts/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single1">
      <Sidebar />
      <div className="singleContainer1">
        <Navbar />
        <div className="top1">
          <div className="left1">
            <div className="editButton1">Edit</div>
            <h1 className="title1">Information</h1>
            <div className="item1">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg1"
              />
              <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
           </div>  
          </div>
          <div className="right1">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom1">
        <h1 className="title1">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;