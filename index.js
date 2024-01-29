/*
*
*/
const prompt = require("prompt-sync")({ sigint: true });
const parseWords = require("./src/parseWords").parseWords;
const report = require("./src/report").report ;
//
const fileNameToProcess = prompt("*** Please tell me the filename to process --> ");
console.log("...fileNameToProcess: ",fileNameToProcess,";") ;
//
try {
    const testWords = parseWords( fileNameToProcess ) ;
    report( testWords ) ;
} catch(errPF){
    console.log("****ERROR: ",errPF,"***")
} ;
/*
const path = require( "path" );
const testWords = parseWords( path.join(__dirname,"./test/text_data.txt")  ) ;
console.log("...testWords: ",testWords,";") ;
*/
//