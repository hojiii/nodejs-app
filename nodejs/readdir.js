var testFolder = 'data';
var fs = require('fs');

fs.readdir(testFolder,function(error, filelist){
    console.log(filelist);
})
//폴더의 파일을 배열로 파일목록을 읽음