import { Spin, Icon } from 'antd';
import React from 'react'
import '../../styles/base.css'
const LoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} spin />
        return <div className="h-v-center"><Spin indicator={icon} /></div>;
    }
    // Handle the error state
    else if (error) {
        console.log(error)
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
export default LoadingComponent