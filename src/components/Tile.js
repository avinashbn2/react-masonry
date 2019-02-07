import React from 'react';

const Tile = ({color, height}) => {
	return (
		<div className="tile">
			<div style={{width: 300, height: height, backgroundColor: color}} />
		</div>
	);
};

export default Tile