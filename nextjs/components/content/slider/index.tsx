import Image from 'next/image';
import styles from './slider.module.css';

interface IndexProps {
    sliderValue: number;
    handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider({ sliderValue, handleSliderChange }: IndexProps) {


    const sliderContainerStyle = {
        display: sliderValue === 100 ? 'none' : 'flex',
    };

    const handAnimationStyle = {
        display: sliderValue === 0 ? 'flex' : 'none',
    };

    return (
        <>
            <div className={styles.sliderContainer} style={sliderContainerStyle}>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className={styles.slider}
                />
            </div>
            <div className={styles.handAnimation} style={handAnimationStyle}>
                <Image src="/hand.png" height={40} width={40} alt="hand" />
            </div>
        </>
    );
}

