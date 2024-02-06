import { Badge, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../pages/search result/SearchResultSlice";

const SelectedFilters = () => {
  const filterData = useSelector((state) => state.searchEvent.filters);
  const dispatch = useDispatch();
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
  return (
    <section className="d-flex gap-3 flex-wrap mb-3 ">
      {filterCount !== 0 ? (
        <Text size="sm" fw={400}>
          {filterCount} filter applied
        </Text>
      ) : null}

      {/* for vendorFollowing */}
      {filterData.followedVendors ? (
        <Badge
          variant="light"
          color="gray"
          size="md"
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
          size="md"
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
          size="md"
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
          size="md"
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

      
    </section>
  );
};

export default SelectedFilters;
