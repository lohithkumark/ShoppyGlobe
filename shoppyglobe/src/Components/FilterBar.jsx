import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setMaxPrice,
  setSort,
  resetFilter
} from "../redux/filterSlice";

function FilterBar() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  return (
    <div className="filter-bar">
      <select
        value={filter.category}
        onChange={e =>
          dispatch(setCategory(e.target.value))
        }
      >
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="perfume">Perfume</option>
      </select>

      <div className="price-slider">
        <span>₹0</span>

        <input
          type="range"
          min="0"
          max="1000"
          value={filter.maxPrice}
          onChange={e =>
            dispatch(setMaxPrice(e.target.value))
          }
        />

        <span>₹{filter.maxPrice}</span>
      </div>

      <select
        value={filter.sort}
        onChange={e =>
          dispatch(setSort(e.target.value))
        }
      >
        <option value="default">Default</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>

      <button onClick={() => dispatch(resetFilter())}>
        Reset
      </button>
    </div>
  );
}

export default FilterBar;
