import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

export const Working = () => {
	return (
		<Box>
			<Box mt="26rem">
				<Text as="h3" fontWeight="bold" color="primary-green">
					Products we’ve been working on
				</Text>
				<Box mt="mxl" mr="50rem">
					<Text as="b2" fontWeight="thin" color="primary-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ornare cursus risus arcu velit cras
						fusce.
					</Text>
				</Box>
			</Box>
			<Box1 />
			<Box2 />
			<Box3 />
			<Box mt="28rem">
				<Text as="h3" fontWeight="bold" color="primary-green">
					Have something to talk about?
				</Text>
				<Box mt="mxl" mr="50rem">
					<Text as="b2" fontWeight="thin" color="primary-white">
						Reach out to us at{' '}
						<Text as="b1" fontWeight="thin" color="primary-green">
							contact@chainlabs.in
						</Text>{' '}
						or shoot us a message at any of our social handles.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
