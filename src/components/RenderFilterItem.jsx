import "./styles/RenderFilterItem.css";

function RenderFilterItem(props) {
    return (
        <div className="filter-item">
            {props.filterKey}
        </div>
    );
}

export default RenderFilterItem;