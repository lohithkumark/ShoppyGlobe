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

  const currency = useSelector(
    state => state.currency.currency
  );

  const rate = useSelector(
    state => state.currency.rate
  );

  const maxConverted = filter.maxPrice * rate;

  return (
    <div className="filter-bar">

      {/* Category */}
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

      {/* Price Slider */}
      <div className="price-slider">

        <span>
          {formatPrice(0, currency)}
        </span>

        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={filter.maxPrice}
          onChange={e =>
            dispatch(
              setMaxPrice(Number(e.target.value))
            )
          }
        />

        <span>
          {formatPrice(maxConverted, currency)}
        </span>

      </div>

      {/* Sort */}
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

      {/* Reset */}
      <button onClick={() => dispatch(resetFilter())}>
        Reset
      </button>

    </div>
  );
}

export default FilterBar;
