import {Composition} from 'remotion';
import {Sequence1} from './Sequence1';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Sequence1"
				component={Sequence1}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
