import { faL } from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  Modal,
  NumberInput,
  Select,
  Switch,
  TextInput,
  Title,
  rem,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCircleX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add_promo_code from "../../../services/user/add_promo_code";
import { addPromoCode } from "../../../pages/vendor/event_description/EventDescriptionSlice";

const PromoCodeModal = ({ opened, close }) => {
  const ticketSalesEndDate = useSelector((state) => state.eventDescription)
    .eventBasicDetails.ticketSalesEndDate;

  //values useState
  const [promoCodeName, setpromoCodeName] = useState("");
  const [expiryDate, setexpiryDate] = useState(null);
  const [promoCodeType, setpromoCodeType] = useState("Cash discount");
  const [applicableAmount, setapplicableAmount] = useState("Minimum value");
  const [discountAmount, setdiscountAmount] = useState("");
  const [limit, setlimit] = useState("");

  //   utitlies useState
  const [hasNoEnd, sethasNoEnd] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const handleAddPromoCode = async () => {
    const requestData = {
      eventId: formData.eventBasicDetails.eventId,
      name: promoCodeName,
      expiryDate: expiryDate,
      hasNoEnd: hasNoEnd,
      promoCodeType: promoCodeType,
      discount: discountAmount,
      applicableOn: applicableAmount,
      limit: limit,
    };

    console.log(requestData);

    const res = await add_promo_code(requestData);

    if (res.ok) {
      dispatch(addPromoCode(requestData));
    }
  };

  function handleNoEndToggleChange() {
    sethasNoEnd((prev) => !prev);
    setexpiryDate(new Date(ticketSalesEndDate));
  }

  return (
    <Modal
      opened={opened}
      onClose={close}
      size={"xl"}
      title="Promotion code details"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Modal.Body>
        <div className="row gap-3 px-2">
          <div className="col-12 row">
            <TextInput
              label="Promotion name"
              className="col-6"
              value={promoCodeName}
              onChange={(e) => setpromoCodeName(e.target.value)}
            />

            <div className="col-6 d-flex gap-2 align-items-center gap-4">
              <DateInput
                className=""
                label="Valid till"
                placeholder="Expiry date"
                disabled={hasNoEnd}
                value={expiryDate}
                onChange={(date) => setexpiryDate(date)}
              />

              {/* if no end selected, the promoCode expiry date become the the ticket sales date */}
              <Switch
                checked={hasNoEnd}
                onChange={handleNoEndToggleChange}
                label="No end"
                color="rgba(0, 0, 0, 1)"
                className="mt-4"
              />
            </div>
          </div>

          <Title order={4} className="mt-2">
            Promotion details
          </Title>
          <div className="col-12 border px-3 pb-4 pt-3 rounded row">
            <Select
              className="col-3"
              label="Create"
              placeholder="Pick value"
              value={promoCodeType}
              onChange={(value) => {
                setpromoCodeType(value);
                setdiscountAmount(null);
              }}
              data={["Cash discount", "Percentage discount"]}
            />

            <NumberInput
              label="of"
              className="col-3"
              placeholder={promoCodeType === "Cash discount" ? "Rs." : "%"}
              prefix={promoCodeType === "Cash discount" ? "Rs. " : ""}
              suffix={promoCodeType === "Percentage discount" ? "%" : ""}
              value={discountAmount}
              onChange={(value)=> setdiscountAmount(value)}
            />

            {applicableAmount === "Minimum value" ||
            applicableAmount === null ? (
              <Select
                className="col-3"
                label="on"
                placeholder="Applicable on"
                value={applicableAmount}
                onChange={(value) => setapplicableAmount(value)}
                data={["Minimum value", "Selective"]}
              />
            ) : (
              <div className="d-flex gap-2 col-3 align-items-center">
                <NumberInput
                  label="on"
                  prefix="Rs "
                  placeholder="Minimum"
                  value={applicableAmount}
                  onChange={(value) => setapplicableAmount(value)}
                />
                <IconCircleX
                  className="mt-4 cursor-pointer"
                  onClick={() => setapplicableAmount(null)}
                  style={{ width: rem(25), height: rem(25) }}
                  color="#3659E3"
                />
              </div>
            )}

            <Select
              className="col-3"
              label="Limit"
              placeholder="Select limit"
              value={limit}
              onChange={(value) => setlimit(value)}
              data={["No limit", "100", "200", "300", "400"]}
            />
          </div>

          <div className="col-12 d-flex justify-content-end">
            <button className="dashboard-btn"
            onClick={handleAddPromoCode}
            >Create promo code</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PromoCodeModal;
