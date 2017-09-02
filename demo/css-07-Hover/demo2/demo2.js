/**
 * Created by wanwn on 2017/3/17.
 */
function load() {
    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.addEventListener('touchend', touch, false);
    function touch(event) {
        var event = event || window.event;

        var oInp = document.getElementById("inp");

        switch (event.type) {
            case "touchstart":
                oInp.innerHTML = "我是Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
                oInp.innerHTML = "<br>我是Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                break;
            case "touchmove":
                event.preventDefault();
                oInp.innerHTML = "<br>我是Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                break;
        }

    }
}
window.addEventListener('load', load, false);