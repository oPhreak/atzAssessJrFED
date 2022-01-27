import React from 'react';
import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

function RenderFilterBar(props) {
    const getFilters = props.filters;
    const [items, setItems] = React.useState(getFilters);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
                <Card
                    itemID={id}
                    title={id}
                    key={id}
                    onClick={handleClick(id)}
                    selected={isItemSelected(id)}
                />
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disable={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disable={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}

function Arrow(
    {
        children,
        disabled,
        onClick
    }) {
        return (
            <button
                disabled={disabled}
                onClick={onClick}
                style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
                }}>
                {children}
            </button>
        );
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);
  
    return (
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: '160px',
        }}
        tabIndex={0}
      >
        <div className="card">
          <div>{title}</div>
          <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div
          style={{
            height: '200px',
          }}
        />
      </div>
    );
}
export default RenderFilterBar;