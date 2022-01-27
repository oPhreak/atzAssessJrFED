
import RenderFilterItem from "./RenderFilterItem";


function DisplayFilters(props) {
    const item = props.filters;

    return (
        <div className="filter-menu">
            {Array.from(item).map((item, index) => (
                <div className="filter-item" key={index}>
                    <RenderFilterItem
                    id = {item.id}
                    filterKey = {item.filterKey}
                    />
                </div>
            ))}
        </div>

    );
}

export default DisplayFilters;