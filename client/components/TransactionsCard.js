import Image from "next/image";
import Ava3 from "../images/Avatar3.png";
const TransactionCard = (props) => {
  return (
    <div className="transactioncard-wrapper">
      <div className="transactioncard-img">
        <Image src={Ava3} width="70px" height="70px" />
      </div>
      <div className="transactioncard-text">
        <div className="transactioncard-info">
          <div className="transactioncard-title-price">
            <span className="transactioncard-title">{props.title}</span>
            <span className="transactioncard-price">${props.price}</span>
          </div>
          <span className="transactioncard-from">From: {props.user}</span>
        </div>
        <div className="transactioncard-time">{props.time}</div>
      </div>
    </div>
  );
};

export default TransactionCard;
