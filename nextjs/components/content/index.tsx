import styles from './content.module.css';
import { useState } from 'react';
import Slider from './slider';
import ImageContent from './imageContent';
import VideoContent from './videoContent';

export default function Content() {

    const [sliderValue, setSliderValue] = useState<number>(0);
    const [contentText, setContentText] = useState<string>("");

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setSliderValue(value);

        if (value >= 25 && value <= 35) setContentText("High intensed LED light");
        else if (value >= 70 && value <= 80) setContentText("Lithium-ion High Voltage Battery");
        else setContentText("");

    };

    return (
        <div className={styles.content}>
            <div className={styles.contentText}>
                {contentText}
            </div>

            <ImageContent sliderValue={sliderValue} />
            <Slider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            <VideoContent sliderValue={sliderValue} />

        </div>
    )
}
