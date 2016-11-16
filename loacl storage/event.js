/**
 * Created by miracle on 16-10-27.
 */
(function () {
    window.addEventListener('storage',function (e) {
        console.log(e);
        console.log('newvalue:'+e.newValue);
        console.log('oldvalue:'+e.oldValue)
    })
})()