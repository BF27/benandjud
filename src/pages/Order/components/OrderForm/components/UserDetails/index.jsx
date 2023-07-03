import { Link } from "react-router-dom";

const UserDetails = ({ changeBox, changeUserData, userData }) => {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.save === "save") {
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      sessionStorage.setItem("userData", JSON.stringify(data));
    }
    changeUserData(data);
    changeBox(true);
  }

  return (
    <form
      className="address-form container d-flex flex-column gap-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <fieldset className="d-flex flex-column gap-2">
        <legend>contact</legend>
        <label htmlFor="input-email">
          <input
            type="email"
            name="email"
            id="input-email"
            placeholder="Email"
            required={true}
            defaultValue={userData ? userData.email : ""}
          />
        </label>
      </fieldset>

      <fieldset className="d-flex flex-column gap-2">
        <legend>Shipping Address</legend>

        <div className="d-flex gap-1">
          <label htmlFor="input-first-name">
            <input
              type="text"
              id="input-first-name"
              name="first-name"
              placeholder="first name"
              required={true}
              defaultValue={userData ? userData["first-name"] : ""}
            />
          </label>
          <label htmlFor="input-last-name">
            <input
              type="text"
              id="input-last-name"
              name="last-name"
              placeholder="last name"
              required={true}
              defaultValue={userData ? userData["last-name"] : ""}
            />
          </label>
        </div>
        <div className="d-flex gap-1">
          <select name="city" id="city-select" required={true}>
            <option value="">- Choose City -</option>
            <option value="budapest">budapest</option>
            <option value="debrecen">debrecen</option>
            <option value="pécs">pécs</option>
          </select>
          <label htmlFor="input-zip">
            <input
              type="text"
              name="zip"
              id="input-zip"
              placeholder="zip code"
              required={true}
              defaultValue={userData ? userData.zip : ""}
            />
          </label>
        </div>
        <label htmlFor="input-address-1">
          <input
            type="text"
            name="address"
            id="input-address-1"
            placeholder="address 1"
            required={true}
            defaultValue={userData ? userData.address : ""}
          />
        </label>
        <label htmlFor="input-address-2">
          <input
            type="text"
            name="address2"
            id="input-address-2"
            placeholder="address 2 (optional)"
            defaultValue={userData ? userData.address2 : ""}
          />
        </label>
        <label htmlFor="input-phone">
          <input
            type="text"
            name="phone"
            id="input-phone"
            placeholder="phone"
            required={true}
            defaultValue={userData ? userData.phone : ""}
          />
        </label>
      </fieldset>
      <label htmlFor="input-save" className="d-flex gap-3">
        <input type="checkbox" name="save" id="input-save" value="save" />
        Save this information for next time
      </label>
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/">Return to the shop</Link>
        <button className="btn">Continue To Shipping</button>
      </div>
    </form>
  );
};

export default UserDetails;
