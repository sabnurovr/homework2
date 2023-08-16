import React, {useState} from 'react';


const Square = () => {
    const [color1, setColor1] = useState("red")
    const [color2, setColor2] = useState("blue")


    const tyu = () => {
        setColor1(color2)
        setColor2(color1)
    }

    const uyt = () => {
        setColor1(color2)
        setColor2(color1)
    }
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
        }}>
            <div
            style={{
                height: "250px",
                width: "250px",
                gap: "10px",
                backgroundColor: color1
            }}
            onClick={uyt}
            >

            </div>
            <div
                style={{
                    height: "250px",
                    width: "250px",
                    gap: "10px",
                    backgroundColor: color2
                }}
                onClick={tyu}
            >

            </div>
        </div>
    );
};

export default Square;