import Box from './Box';
import Container from './Container';
import Text from './Text';

import Twitter from 'svgs/twitter.svg';
import Linkedin from 'svgs/linkedin.svg';
import Github from 'svgs/github.svg';
import Instagram from 'svgs/instagram.svg';
import Facebook from 'svgs/facebook.svg';

const Footer = () => {
	return (
		<Box
			id="contact"
			mt={{ mobS: 'wm', tabS: '15rem', deskM: '25rem' }}
			bg="rgba(236, 236, 236, 0.09)"
			width="100vw"
			css={`
				backdrop-filter: blur(8px);
			`}
			py={{ mobS: 'wxxs', tabS: 'wxl', deskM: '14rem' }}
		>
			<Container>
				<Box
					mx={{ mobS: 'ws', tabL: '0' }}
					display="flex"
					justifyContent="space-between"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
				>
					<Box
						display="flex"
						justifyContent="space-between"
						flexDirection={{ mobS: 'column', deskM: 'row' }}
						flex={1}
					>
						<Box mb={{ mobS: 'mxl', tabL: '0' }}>
							<Text as="h3" fontWeight="bold" color="primary-white" mb={{ mobS: 'mm', tabL: 'ml' }}>
								Follow Us on
							</Text>
							<Box row between>
								<Box>
									<Twitter />
								</Box>
								<Box>
									<Linkedin />
								</Box>
								<Box>
									<Github />
								</Box>
								<Box>
									<Instagram />
								</Box>
								<Box>
									<Facebook />
								</Box>
							</Box>
						</Box>
						<a href="#top">
							<Box center>
								<Box as="img" src="/static/images/logo.png" mr={{ mobS: 'mxs', tabS: 'mxl' }} />
								<Box as="img" src="/static/images/brand.png" />
							</Box>
						</a>
					</Box>
					<Box
						color="primary-white"
						display={{ mobS: 'none', tabS: 'flex' }}
						flex={1}
						flexDirection={{ tabS: 'column', deskM: 'row' }}
						justifyContent={{ tabS: 'space-evenly', deskM: 'flex-end' }}
						alignItems={{ tabS: 'center', deskM: 'center' }}
					>
						<a href="#vision">
							<Text as="links">Vision</Text>
						</a>
						<a href="#products">
							<Text as="links" ml={{ tabS: '0', deskM: 'wm' }}>
								Products
							</Text>
						</a>
						<a href="#contact">
							<Text as="links" ml={{ tabS: '0', deskM: 'wm' }}>
								Contact
							</Text>
						</a>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
