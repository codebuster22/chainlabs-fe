import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import QuestionMark from '../../../svgs/questionMark.svg';
import BoxButton from './BoxButton';
import BoxComp from './BoxComp';

const Box3 = () => {
	return (
		<BoxComp>
			<Box>
				<QuestionMark />
			</Box>
			<Box ml="wxxl">
				<Text as="h3" fontWeight="bold" textAlign="left" color="primary-green">
					Mystery project
				</Text>
				<Box column fontWeight="thin">
					<Text as="b2">?????????????????????????????????</Text>
					<Text as="b2">?????????????????????????????????</Text>
					<Text as="b2">???????????????????????????????</Text>
				</Box>
				<BoxButton bg="rgba(4, 255, 164, 0.5)" text="Learn More" />
			</Box>
		</BoxComp>
	);
};

export default Box3;
