import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'


const Spinner = ({ size = '40', stroke = '13', speed = '1', color = 'black' }) => {
    return (
        <LineSpinner
            size={size}
            stroke={stroke}
            speed={speed}
            color={color}
        />
    );
};

export default Spinner;