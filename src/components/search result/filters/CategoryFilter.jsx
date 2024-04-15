import { Checkbox, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import get_all_categories from "../../../services/create event/get_all_categories";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../pages/search result/SearchResultSlice";

const CategoryFilter = () => {

  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.searchEvent.filters);

  function updateFilter(field, value) {
    dispatch(
      updateFilters({
        field: field,
        value: value,
      })
    );
  }

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await get_all_categories();
      if (res.ok) {
        const data = await res.json();
        setcategories(data);
        console.log(data);
      }
    }

    getCategories();
  }, []);

  function updateFilter(field, value) {
    dispatch(
      updateFilters({
        field: field,
        value: value,
      })
    );
  }

  return (
    <div className="mt-5">
      <Text size="sm" fw={600}>
        Category
      </Text>

      <div className="d-grid gap-3 mt-2">
        {categories.map(eachCat=>(
          <Checkbox label={eachCat} 
          checked={filterData.categoryType === eachCat}
          onClick={() => updateFilter("categoryType", eachCat)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
