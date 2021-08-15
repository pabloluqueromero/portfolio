class Utils{

    static animate(inView: boolean, entry: any) {
        let styleSheet: React.CSSProperties = {};
        if (inView) {
            styleSheet.animationFillMode = 'forwards';
            styleSheet.animationDelay = (entry.target.getAttribute("animation-delay") || '0') + 'ms';
            styleSheet.animationDuration = (entry.target.getAttribute("animation-duration") || '200') + "ms";
            styleSheet.animationName = entry.target.getAttribute("animation-name") || '';
        }
        return styleSheet;
    }
}


export default Utils;
