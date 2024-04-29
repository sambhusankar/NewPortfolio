
function Magnetic(element){
    element.addEventListener("mousemove", (e) => {
        const pos = element.getBoundingClientRect()
        const y = pos.top + window.scrollY
        const x = pos.left
        const m_x = (e.pageX - x -pos.width / 2) / 2
        const m_y = (e.pageY - y - pos.height / 2) / 2
       
        element.style.transform = `translate(${m_x}px, ${m_y}px)`
       
    });
    element.addEventListener("mouseout", () => {
        element.style.transform = "translate(0px, 0px)";
        
    })
}
export default Magnetic