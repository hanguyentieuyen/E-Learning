import Image from "next/image";
import Zalopay from "../../images/zalopay.jpg";
import Momo from "../../images/momo.jpg";
import Visa from "../../images/visa.jpg";
import MasterCard from "../../images/mastercard.jpg";
import Paypal from "../../images/paypal.jpg";

const PaymentMethod = () => {
  return (
    <div className="card paymentmethod-wrapper">
      <div className="card-header">Top Payment Methods</div>
      <div className="card-body">
        <table className="table  table-borderless">
          <tbody>
            <tr>
              <td className="table-payment-img">
                <Image src={Zalopay} width="50" height="50" />
              </td>
              <td className="table-payment-item">Zalo Pay</td>
              <td className="table-payment-item">45%</td>
            </tr>
            <tr>
              <td className="table-payment-img">
                <Image src={Momo} width="50" height="50" />
              </td>
              <td className="table-payment-item">Momo</td>
              <td className="table-payment-item">45%</td>
            </tr>
            <tr>
              <td className="table-payment-img">
                <Image src={Paypal} width="50" height="50" />
              </td>
              <td className="table-payment-item">PayPal</td>
              <td className="table-payment-item">45%</td>
            </tr>
            <tr>
              <td className="table-payment-img">
                <Image src={MasterCard} width="50" height="50" />
              </td>
              <td className="table-payment-item">MasterCard</td>
              <td className="table-payment-item">45%</td>
            </tr>
            <tr>
              <td className="table-payment-img">
                <Image src={Visa} width="50" height="50" />
              </td>
              <td className="table-payment-item">Visa</td>
              <td className="table-payment-item">45%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentMethod;
