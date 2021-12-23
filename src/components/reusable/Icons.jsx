import React from 'react'
import FeatherIcon from 'feather-icons-react';

function Icons({ size='20', icon, className, onClick, ...otherProps }) {
    return (
        <>
            <FeatherIcon icon={icon} size={size} className={className} onClick={onClick} {...otherProps} />
        </>
    )
}

export default Icons