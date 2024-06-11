import { useState } from 'react';
import { v4 } from 'uuid';

const TITLES = ['Title 1', 'Title 2', 'Title 3'];
const TEXTS = ['Text 1', 'Text 2', 'Text 3'];

const Tabs = () => {
	const [activeText, setActiveText] = useState(0);

	return (
		<>
			{TITLES.map((title, i) => (
				<button key={v4()} onClick={() => handleText(setActiveText, i)}>
					{title}
				</button>
			))}

			<p>{TEXTS[activeText]}</p>
		</>
	);
};

const handleText = (setActiveText, index) => {
	setActiveText(index);
};

export default Tabs;
