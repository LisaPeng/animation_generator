/**
 * Created by lisa on 16/9/18.
 */


/**
 * 阻碍原有的拖动功能
 * @param object
 */
var preventDrag = function (object) {
    object.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
};

/**
 * 判断当前circle是第几个
 * @param time
 * @param offsetX
 * @param view
 */
var judge = function (time, offsetLeft, offsetTop , offsetX, view) {
    var index = -1;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].time > time) {
            arr.splice(i, 0, {
                time: time * 100,
                a: offsetLeft,
                b: offsetTop,
                condition: "transform:translate(" + offsetLeft + "px," + offsetTop + "px)",
                offsetX: offsetX,
                view: view
            });
            index = i;
            break;
        }
    }
    if(index === -1) {
        arr.push({
            time: time * 100,
            condition: "transform:translate(" + offsetLeft + "px," + offsetTop + "px)",
            a: offsetLeft,
            b: offsetTop,
            offsetX: offsetX,
            view: view
        });
    }
};