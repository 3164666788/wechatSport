auto()
text('微信运动').findOnce().parent().parent().parent().parent().click()

function captureSportsData(runtime){
    text('步数排行榜').waitFor()
    text('步数排行榜').findOnce().parent().parent().click()

    //not recommand the following method (Don't universal)
    // click(360,1194)
    sleep(2000);

    const today = new Date(Date.now());
    const date1 = today.toISOString().split('T')[0]; // "2020-06-13T18:30:00.000Z"
    var timenow = today.toISOString().split('T')[1].slice(0,12)

    var path = "/sdcard/"+date1+'.txt'
    files.append(path,"第"+ runtime +"次运行\n")
    do{
        sleep(500);
        stepTable = id("c5a").untilFind().toArray();
        userTable = id("c6d").untilFind().toArray();
        for( var i = 0; typeof(stepTable[i]) != 'undefined'; i++){
            var targetStep = stepTable[i].text();
            var targetUser = userTable[i].text();
            var wtext = targetUser + '-' + targetStep + '-'+ timenow + '\n'
            log(wtext)
            files.append(path,wtext)
        }
    }while(scrollDown())
    id('ei').findOne().parent().click()
    
}
var runtime = 0;
while (true){
    captureSportsData(runtime);
    runtime++;
    sleep(60*1000);//sleep for 30s, You should sleep at least for 1 min in real to avoid ip refrain. 
}