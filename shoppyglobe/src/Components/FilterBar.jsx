import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setMaxPrice,
  setSort,
  resetFilter
} from "../redux/filterSlice";

import { formatPrice } from "../utils/formatPrice";

function FilterBar() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const currency = useSelector(state => state.currency);

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

        <span>
          {formatPrice(0, currency.code, currency.rate)}
        </span>

        <input
          type="range"
          min="0"
          max="2000"
          value={filter.maxPrice}
          onChange={e =>
            dispatch(setMaxPrice(Number(e.target.value)))
          }
        />

        <span>
          {formatPrice(
            filter.maxPrice,
            currency.code,
            currency.rate
          )}
        </span>

      </div>

      <select
        value={filter.sort}
        onChange={e =>
          dispatch(setSort(e.target.value))
        }
      >
        <option value="default">Default</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={() => dispatch(resetFilter())}>
        Reset
      </button>

    </div>
  );
}

export default FilterBar;
