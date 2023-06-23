import "./styles/checkOutBtn.css";
const CheckOutBtn = ({totalPrice}) => {
  return (
    <button className="check-out-btn btn d-flex justify-content-between align-items-center gap-3 p-3">
      <span>check out</span>
      <div className="divider"></div>
      <span>{`${totalPrice}ft`}</span>
    </button>
  )
}

export default CheckOutBtn
