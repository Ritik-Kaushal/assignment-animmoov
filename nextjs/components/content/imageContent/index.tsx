import Image from "next/image";


export default function ImageContent({ sliderValue }: { sliderValue: number }) {

    const imageContainerStyle = {
        display: sliderValue == 100 ? 'none' : 'flex',
        position: 'relative' as 'relative',
        top: '0',
        left: '0',
        width: '95%',
        overflow: 'hidden',
        paddingLeft: '4px',
        paddingRight: '4px'
    };

    const carStyle = {
        position: 'absolute' as 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0% 100%)`,
        zIndex: "999"
    };

    const headlightStyle = {
        display: sliderValue >= 25 && sliderValue <= 35 ? 'flex' : 'none',
        position: 'absolute' as 'absolute',
        width: '70px',
        height: '50px',
        left: '39px',
        top: '203px',
        zIndex: '9999'
    }

    const machineStyle = {
        display: sliderValue >= 70 && sliderValue <= 80 ? 'flex' : 'none',
        position: 'absolute' as 'absolute',
        width: '200px',
        height: '100px',
        left: '92px',
        top: '104px',
        zIndex: '9999'
    }

    return (
        <div style={imageContainerStyle}>
            <div style={headlightStyle}>
                <Image src="/headlight.png" width={70} height={50} alt="headlight" />
            </div>
            <div style={machineStyle}>
                <Image src="/machine.png" width={200} height={100} alt="machine" />
            </div>
            <div>
                <Image src="/skeleton.jpg" width={320} height={300} alt="skeleton" />
            </div>
            <div style={carStyle}>
                <Image src="/car.jpg" width={320} height={300} alt="car" />
            </div>
        </div>
    )
}
