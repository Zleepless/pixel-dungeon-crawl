import React, {useRef, useEffect} from 'react';

const PixelDungeon = ({ width, height, tilesize }) => {
    const canvasRef = React.useRef();
    useEffect(()=>{
        console.log('Canvas Drawen');
    })
    return (
        <canvas
            ref={canvasRef}
            width={width * tilesize}
            height={height * tilesize}
            style={{ border: '1px solid black' }}
        ></canvas>
    );
};

export default PixelDungeon;