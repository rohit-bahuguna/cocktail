import React from 'react';

const Search = ({ getinput }) => {
	return (
		<div>
			<input type="text" onChange={e => getinput(e.target.value)} />
		</div>
	);
};

export default Search;
