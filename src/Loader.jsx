import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const Loader = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <FadeLoader 
                color="#36d7b7"
                height={100}
                width={3}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;

