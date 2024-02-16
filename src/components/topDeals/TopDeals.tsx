import { topDealUsers } from "../../data";
import "./TopDeals.scss";

const TopDeals = () => {
  return (
    <div className="topDeals">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt={user.username} />
              <div className="userInfo">
                <span className="userName">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">
              <span>&#8358;</span>
              {user.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
