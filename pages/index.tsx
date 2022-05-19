import OuterContainer from 'components/OuterContainer';
import { useAnimation } from 'framer-motion';
import Box from 'src/components/Box';
import HomeContainer from 'src/containers/home';

const Home = () => {
	const controls = useAnimation();

	return (
		<OuterContainer bg="purple-500">
			<HomeContainer control={controls} />
			<Box height="200vh" bg="purple-500" className="section-2"></Box>
		</OuterContainer>
	);
};

export default Home;
