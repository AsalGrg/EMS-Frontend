import { Button, Input, Switch, Text, rem, useMantineTheme } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import apply_promocode from "../../../services/user/apply_promocode";

const UsePromoCode = ({ eventId, setPromoCodeResponse, total }) => {
  const theme = useMantineTheme();
  const [usePromoCode, setUsePromoCode] = useState(false);
  const [promoCode, setpromoCode] = useState("");
  const [applyError, setApplyError] = useState("");

  const handleApplyPromoCode = async () => {
    console.log("here");
    const res = await apply_promocode(eventId, promoCode, total);

    if (res.ok) {
      //we get discount percent in response
      const data = await res.json();
      console.log(data);
      setPromoCodeResponse(data);
      setApplyError("");
    } else if (!res.ok) {
      const error = await res.json();
      console.log(error);
      setApplyError(error.message);
    }
  };

  return (
    <>
      <Switch
        checked={usePromoCode}
        onChange={(event) => setUsePromoCode(event.currentTarget.checked)}
        color="teal"
        size="md"
        label="Use promo code"
        thumbIcon={
          usePromoCode ? (
            <IconCheck
              style={{ width: rem(12), height: rem(12) }}
              color={theme.colors.teal[6]}
              stroke={3}
            />
          ) : (
            <IconX
              style={{ width: rem(12), height: rem(12) }}
              color={theme.colors.red[6]}
              stroke={3}
            />
          )
        }
      />

      {usePromoCode ? (
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <Input
              placeholder="Promo code"
              size="sm"
              error={applyError}
              value={promoCode}
              onChange={(value) => setpromoCode(value.target.value)}
            />

            {applyError&&<Text c='red' size="xs">{applyError}</Text>}
          </div>

          <Button
            color="rgba(300, 118, 0, 1)"
            size="sm"
            disabled={promoCode.length === 0 || promoCode === null}
            onClick={handleApplyPromoCode}
          >
            Apply
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default UsePromoCode;
