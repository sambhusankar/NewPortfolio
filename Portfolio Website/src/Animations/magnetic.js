
function Magnetic(element){
    element.addEventListener("mousemove", (e) => {
        const y = element.offsetTop
        const x = element.offsetLeft
        const m_x = e.pageX - x - element.offsetWidth / 2
        const m_y = e.pageY - y - element.offsetHeight / 2
        element.style.transform = `translate(${m_x * 0.3}px, ${m_y * 0.3}px)`
    });
    element.addEventListener("mouseout", () => {
        element.style.transform = "";
    })
}
export default Magnetic