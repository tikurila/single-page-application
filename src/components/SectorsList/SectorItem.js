import React, { useState } from 'react';

const SectorsItem = ({ sector, number }) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false);
    const toggleToolTip = (newValue) => {
        setDirectionSwitched(number % 3 === 0);
        setToolTipShowing(newValue);
    };

    return (
        <div className={isToolTipShowing ? "sectors-item sectors-item--open" : "sectors-item"}
            onMouseEnter={() => toggleToolTip(true)}
            onMouseLeave={() => toggleToolTip(false)}
            style={{
                background: `url(${sector.imgUrl}) center no-repeat`,
                backgroundSize: 'cover'
            }}
        >

            <p className="sectors-item-name"
                onClick={() => toggleToolTip(true)}
            >
                {sector.name}
            </p>
            {
                isToolTipShowing && <p className={`sectors-item-tooltip ${isDirectionSwitched
                        ? "sectors-item-switched"
                        : ""
                    }`}>
                    {sector.description}
                </p>
            }
            <button className="sectors-item-btn"
                onClick={() => toggleToolTip(false)} />
        </div>
    );
};

export default SectorsItem;