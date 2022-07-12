auto()
toast(' 11111')
click(360,1194)
sleep(3000);
toast("success into ranking")

const today = new Date(Date.now());
const date1 = today.toISOString().split('T')[0]; // "2020-06-13T18:30:00.000Z"
var timenow = today.toISOString().split('T')[1].slice(0,12)
toast(date1,timenow)
var path = "/sdcard/"+date1+'.txt'
id("c5a").untilFind().forEach(child => {
    var target = child.text();
    var wtext = target + '   '+ timenow + '\n'
    toast(wtext)
    // Files.append(path,wtext)
    });
// id("c68").findOne().children().forEach(child => {
//     var text = child.findOne(id("c5a")).text();
//     toast(text);
//     sleep(1000)
//     });