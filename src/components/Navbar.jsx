import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function NavBtn( {children, setActive, setHovered, id, active, btnRefs, hovered} ){
    const isBubbleActive = (hovered ?? active) === id;
    return (
        <button 
        ref={(el) => (btnRefs.current[id] = el)}
        onMouseEnter={() => {
            setHovered(id);
        }}
        onMouseLeave={() => {
            setHovered(null);
        }}
        onClick={() => {
            setActive(id);
        }}
        className={`navBtn ${isBubbleActive ? "inverted" : ""}`}>{children}</button>
    )
}

function NavBubble({position}){
    return (
        <motion.div animate={position} transition={{ type: "spring", stiffness: 500, damping: 40 }} className="navBubble"/>
    )
}

function Navbar({active, setActive}){
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const [hovered, setHovered] = useState(null);

    const btnRefs = useRef([]);

    useEffect(() => {
        const updateBubble = () => {
            const targetId = hovered ?? active;

            const el = btnRefs.current[targetId];
            if (!el) return;

            const rect = el.getBoundingClientRect();

            setPosition({width: rect.width, opacity: 1, left: el.offsetLeft,});
        }

        updateBubble();
        window.addEventListener("resize", updateBubble)
        window.addEventListener("orientationchange", updateBubble)

        return () => {
            window.removeEventListener("resize", updateBubble)
            window.removeEventListener("orientationchange", updateBubble)
        }
    }, [hovered, active]);

    return (
        <div className="navbar">
            <NavBtn btnRefs={btnRefs} setActive={setActive} setHovered={setHovered} id={0} active={active} hovered={hovered}>Home</NavBtn>
            <NavBtn btnRefs={btnRefs} setActive={setActive} setHovered={setHovered} id={1} active={active} hovered={hovered}>Projects</NavBtn>
            <NavBtn btnRefs={btnRefs} setActive={setActive} setHovered={setHovered} id={2} active={active} hovered={hovered}>Experience</NavBtn>
            <NavBubble position={position}/>
        </div>
    )
}

export default Navbar