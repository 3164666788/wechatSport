auto()

click(360,1194)
sleep(3000);

const today = new Date(Date.now());
const date1 = today.toISOString().split('T')[0]; // "2020-06-13T18:30:00.000Z"
var timenow = today.toISOString().split('T')[1].slice(0,12)

var path = "/sdcard/"+date1+'.txt'
stepTable = id("c5a").untilFind().toArray();
userTable = id("c6d").untilFind().toArray();
for( var i = 0; typeof(stepTable[i]) != 'undefined'; i++){
    var targetStep = stepTable[i].text();
    var targetUser = userTable[i].text();
    var wtext = targetUser + '-' + targetStep + '-'+ timenow + '\n'
    log(wtext)
    files.append(path,wtext)
}
