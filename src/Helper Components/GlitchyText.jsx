/* eslint-disable react/prop-types */
import './GlitchyText.css';
import { useScramble } from 'use-scramble';

export default function GlitchyText(props) {

    const Component = () => {
        const { ref } = useScramble({
            text: props.text,
            range: [65,125],
            speed: 1,
            tick: 1,
            step: 5,
            scramble: 50,
            seed: 0.1,
            chance: 0.4,
            overdrive: false,
            overflow: false,
          })

        return <h1 style={props.styling} ref={ref} />;
    }
 

  return (
    <Component />
  );
}
