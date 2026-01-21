import { useEffect, useState } from "react"
const ColorGenerator = () => {
    const [color, setColor] = useState('#000000');
    const [typeOf, setTypeOf] = useState('hex');

    const random = (length: number) => {
        return Math.floor(Math.random() * length)
    }

    const handleHex = () => {
        const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hex = '#';

        for(let i = 0; i < 6; i++){
            hex += ar[random(ar.length)];
        }
        setColor(hex)
    }
    const handleRgb = () =>{
        const r = random(256);
        const g = random(256);
        const b = random(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }
    useEffect(() => {
        if(typeOf === 'rgb') handleRgb();
        else handleHex()
    }, [typeOf])

    return(
        <div style={{
            width: '100%',
            height: '100vh',
            background: color,
            textAlign: 'center'
        }
        }>
            <button onClick={() => setTypeOf("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOf("rgb")}>Create RGB Color</button>
            <button onClick={typeOf === 'hex' ? handleHex : handleRgb}>Generate Random Color</button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection: "column",
            }}>
                <h3>{typeOf === "rgb" ? 'RGB color' : 'HEX color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
export default ColorGenerator