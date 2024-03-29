import { Button, Menu, rem } from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { IconCircleX } from "@tabler/icons-react";
import React, { useState } from "react";

const DateSelector = ({ setDate, clearDateFilter }) => {
  const [dateToDisplay, setdateToDisplay] = useState(null);
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const [isCalendarOpened, setisCalendarOpened] = useState(false);

  function dateChange(date) {
    console.log(date);
    setisCalendarOpened(false);
    setisMenuOpened(false);
    setDate(date);
    setdateToDisplay(date);
  }

  function defaultDateFilter() {
    setisCalendarOpened(false);
    setisMenuOpened(false);
    setdateToDisplay(null);
    clearDateFilter();
  }
  return (
    <section>
      {!isCalendarOpened ? (
        <Menu
          shadow="md"
          width={200}
          opened={isMenuOpened}
          onChange={setisMenuOpened}
        >
          <Menu.Target>
            <div className="d-flex gap-2 align-items-center">
              <button
                className="rounded rounded-5 bg-white border border-2 px-3 py-2"
                onClick={() => setisMenuOpened(true)}
              >
                {dateToDisplay
                  ? dateToDisplay instanceof Date
                    ? dateToDisplay.toString().substring(0, 10)
                    : dateToDisplay
                  : "Date"}
              </button>

              {isMenuOpened && dateToDisplay? (
                <IconCircleX
                  onClick={defaultDateFilter}
                  style={{ width: rem(25), height: rem(25) }}
                  color="#3659E3"
                />
              ) : null}
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => dateChange("Today")}>Today</Menu.Item>
            <Menu.Item onClick={() => dateChange("Tomorrow")}>
              Tommorow
            </Menu.Item>
            <Menu.Item onClick={() => dateChange("This weekend")}>
              This weekend
            </Menu.Item>
            <Menu.Item onClick={() => dateChange("This month")}>
              This month
            </Menu.Item>
            <Menu.Item onClick={() => setisCalendarOpened((prev) => !prev)}>
              Calendar
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <DatePickerInput
          defaultChecked={true}
          placeholder="Pick dates range"
          value={dateToDisplay instanceof Date ?dateToDisplay: null}
          onChange={(date) => dateChange(date)}
        />
      )}
    </section>
  );
};

export default DateSelector;
