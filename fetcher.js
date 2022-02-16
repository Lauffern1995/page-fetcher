const args = process.argv.slice(2)

const request = require('request');
const fs = require('fs')

let download = (url, fileName) => { // receive url and file name from downoad call at line 30 
  request(url, (error, body) => { //retrive the url body via request
    console.log('error:', error); // Print the error if one  //occurred
    saveFile(body, fileName) // if no error store url body as param1, and store fileName to write to as param2
  });
}

let saveFile = (body, fileName) => { /
  fs.writeFile(fileName, body, err => { // use fs.writefile with params from download to write new file in desired directory
    if (err) {
      console.error(err)
      return
    }
    fs.stat(fileName, (err, stats) => { // collect the stat using fs.stat method **mentor help**
      if(err){
        console.log(err)
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`) // print the file size and file name to console
    })
 
  })
}

download(`${args[0]}`, `${args[1]}`)




