import { Badge, Button, Text } from "@mantine/core";
import { IconAdjustments, IconX } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllFilters,
  updateFilters,
} from "../../../pages/search result/SearchResultSlice";
import FiltersModal from "./FiltersModal";
import { useDisclosure } from "@mantine/hooks";

const SelectedFilters = () => {
  const filterData = useSelector((state) => state.searchEvent.filters);
  const dispatch = useDispatch();

  const [opened, { open, close }] = useDisclosure(false);

  var filterCount = 0;

  filterData.followedVendors ? filterCount++ : null;
  filterData.date ? filterCount++ : null;
  filterData.ticketType ? filterCount++ : null;
  filterData.categoryType ? filterCount++ : null;

  function deleteFilter(field, value) {
    dispatch(
      updateFilters({
        field,
        value,
      })
    );
  }

  function clearFilters() {
    dispatch(clearAllFilters());
  }
  return (
    <section className="ms-3 ms-md-0">
      <FiltersModal opened={opened} close={close} />
      <section className="d-flex gap-3 flex-wrap mb-3 ">
        {filterCount !== 0 ? (
          <>
            <Text size="sm" fw={400} className="d-lg-block d-none">
              {filterCount} filter applied
            </Text>
          </>
        ) : null}

        <Badge
          color="blue"
          size="lg"
          className="d-lg-none d-block btn btn-link"
          onClick={open}
        >
          <IconAdjustments size={19} />{" "}
          {filterCount != 0 ? `Filters (${filterCount})` : "Filters"}
        </Badge>
        {/* for vendorFollowing */}
        {filterData.followedVendors ? (
          <Badge
            variant="light"
            color="gray"
            size="lg"
            tex
            rightSection={
              <IconX
                size={15}
                onClick={() => {
                  deleteFilter("followedVendors", false);
                }}
              />
            }
          >
            Followed Organizers
          </Badge>
        ) : null}

        {/* for date */}
        {filterData.date ? (
          <Badge
            variant="light"
            color="gray"
            size="lg"
            tex
            rightSection={
              <IconX
                size={15}
                onClick={() => {
                  deleteFilter("date", null);
                }}
              />
            }
          >
            {filterData.date instanceof Date
              ? filterData.date.toString().substring(0, 10)
              : filterData.date}
          </Badge>
        ) : null}

        {/* for ticketType */}
        {filterData.ticketType ? (
          <Badge
            variant="light"
            color="gray"
            size="lg"
            tex
            rightSection={
              <IconX
                size={15}
                onClick={() => {
                  deleteFilter("ticketType", null);
                }}
              />
            }
          >
            {filterData.ticketType}
          </Badge>
        ) : null}

        {/* for categoryType */}
        {filterData.categoryType ? (
          <Badge
            variant="light"
            color="gray"
            size="lg"
            tex
            rightSection={
              <IconX
                size={15}
                onClick={() => {
                  deleteFilter("categoryType", null);
                }}
              />
            }
          >
            {filterData.categoryType}
          </Badge>
        ) : null}

        {filterCount != 0 ? (
          <Text
            size="mg"
            className="text-primary btn btn-link"
            onClick={clearFilters}
          >
            Clear All
          </Text>
        ) : null}
      </section>
    </section>
  );
};

export default SelectedFilters;
