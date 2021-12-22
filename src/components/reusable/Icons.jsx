import React from 'react'
import FeatherIcon from 'feather-icons-react';

function Icons({ size='20', icon, className, onClick }) {
    return (
        <>
            <FeatherIcon icon={icon} size={size} className={className}  />
        </>
    )
}

export default Icons