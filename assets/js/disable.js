document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {}
    if (e.shiftKey && (event.button == 2 || event.button == 3)) {}
    return false;
};
function click() {
    if (event.button == 2 || event.button == 3) {
        oncontextmenu = 'return false';
        function disableWheelScroll() {
            if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
            document.body.onmousewheel = blockWheel;
        }
    }
}
document.onmousedown = click
document.oncontextmenu = new Function("return false;")

$(function() {
    var title = document.title,
        animSeq = ["/", "\\"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 300);})