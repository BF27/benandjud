import "./styles/messageModal.css";

const MessageModal = ({ isModalVisible }) => {
  if (isModalVisible) {
    return (
      <div className="message-modal d-flex justify-content-center align-items-center">
        <span>
          Your message have been sent!
          <br /> We will contact you soon!
        </span>
      </div>
    );
  }
};

export default MessageModal;
