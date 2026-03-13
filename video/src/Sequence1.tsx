import {AbsoluteFill, interpolate, useCurrentFrame, staticFile, Sequence, Audio} from 'remotion';

export const Sequence1: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<Audio src={staticFile('drone.mp3')} />
			{/* Frame 1: The Wake Up (0-50) */}
			<Sequence from={0} durationInFrames={60}>
				<Frame 
					src={staticFile('frame1.png')} 
					opacity={interpolate(frame, [0, 10, 50, 60], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
				/>
			</Sequence>

			{/* Frame 2: The Burden (50-100) */}
			<Sequence from={50} durationInFrames={60}>
				<Frame 
					src={staticFile('frame2.png')} 
					opacity={interpolate(frame, [50, 60, 100, 110], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
				/>
			</Sequence>

			{/* Frame 3: The Departure (100-150) */}
			<Sequence from={100} durationInFrames={60}>
				<Frame 
					src={staticFile('frame3.png')} 
					opacity={interpolate(frame, [100, 110, 140, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};

const Frame: React.FC<{src: string; opacity: number}> = ({src, opacity}) => {
	return (
		<AbsoluteFill style={{opacity}}>
			<img
				src={src}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</AbsoluteFill>
	);
};
