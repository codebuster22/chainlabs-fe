import { useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Box from 'src/components/Box';
import MemberCard from 'src/components/MemberCard';
import OuterContainer from 'src/components/OuterContainer';
import Text from 'src/components/Text';
import GET_TEAM_MEMBERS from 'src/gql/query/GetTeamMembers';
import BlurSVG from '../../svgs/blur.svg';

const About = () => {
	const { data: teamMembers, loading } = useQuery(GET_TEAM_MEMBERS);

	return (
		<OuterContainer bg="purple-500">
			<Box
				mx="wl"
				between
				pt={{ mobS: '8.28rem', tabL: '12.8rem', deskM: '19rem' }}
				pb={{ mobS: '11.2rem', tabL: '16.1rem' }}
				flexDirection={{ mobS: 'column-reverse', tabL: 'row' }}
			>
				<Box width={{ mobS: '29.57rem', tabL: '39rem', deskM: '48rem' }} mr="5.2rem">
					<Text as="h1" color="green-200" mt={{ mobS: 'ml', tabL: '0' }}>
						Who we are
					</Text>
					<Text as="b2" color="grey-100" mt={{ mobS: 'ms', tabL: 'wl' }}>
						Established in 2021, Chain Labs is working towards bringing the power of decentralization to
						everyday life by researching and tackling problems one at a time. We want to make an ecosystem
						governed by people and not by single organizations.
					</Text>
					<Text as="b2" color="grey-100" mt="mxxxl">
						We enjoy celebrating by putting people at the forefront of everything we do. As we expand, we're
						always on a search for innovators, experimenters, and problem solvers to join our team
					</Text>
				</Box>
				<Box
					height={{ mobS: '26.4rem', tabL: '34rem', deskM: '52.1rem' }}
					width={{ mobS: '24.3rem', tabL: '34.8rem', deskM: '53.3rem' }}
					position="relative"
				>
					<Image
						alt="Error Occured"
						src="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/About/Illustration/Illustrtation_Desktop_EPQXlY8OU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656949181206"
						layout="fill"
					/>
				</Box>
			</Box>
			<Box ml={{ mobS: 'mm', mobL: 'mxl', tabL: 'wl' }} column mb={{ mobS: '6rem', tabL: '11rem' }}>
				<Box
					position="absolute"
					display={{ mobS: 'none', deskM: 'block' }}
					right={{ mobS: '-20%', tabS: '-30%' }}
					top={{ mobS: '-40%', tabS: '60%' }}
					transform="scale(0.7)"
					zIndex={2}
				>
					<BlurSVG />
				</Box>
				<Text as="h1" color="green-200">
					Our wonderful team
				</Text>
				<Box row flexWrap="wrap" mr={{ mobS: '0rem', tabL: '20.5rem', deskM: '40rem' }} mt="1.4rem">
					{!loading &&
						teamMembers?.teamMembersCollection?.items?.map((member) => {
							const image = member?.pfp.url;
							return (
								<Box mt="ws" mr={{ mobS: '3.4rem', tabL: '8.3rem', deskM: '7.2rem' }}>
									<MemberCard
										image={image}
										name={member.name}
										role={member.title}
										linkedInUrl={member.linkedinHandle}
										twitterUrl={member.twitterHandle}
										portfolioUrl={member.portfolioUrl}
									/>
								</Box>
							);
						})}
				</Box>
			</Box>
		</OuterContainer>
	);
};

export default About;
