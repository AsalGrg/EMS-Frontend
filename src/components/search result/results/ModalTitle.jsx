import { Badge, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllFilters,
  updateFilters,
} from "../../../pages/search result/SearchResultSlice";

const ModalTitle = () => {
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

  function clearFilters() {
    dispatch(clearAllFilters());
  }

  return (
    <section className="row gap-2">
      <Text size="lg" fw={700}
      className="col-12 px-3">
        Filters
      </Text>

      <div className="col-12 d-flex gap-3 flex-wrap">
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
      </div>
    </section>
  );
};

export default ModalTitle;
