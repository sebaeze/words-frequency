/*
*
*/
const fs =    require("fs" )
//
const DISCARD_WORDS = [ "THE","AND","IN" ] ;
/*
*  Returns array of elements having each word as a key and counter
*/
const parseWords = (fileName) => {
    try {
        //
        if ( fs.existsSync(fileName)==true ){
            console.log("....processing file: "+fileName+";") ;
        } else {
            throw new Error(`file: '${fileName}' doesn't exist`) ;
        } ;
        //
        let stringLines = fs.readFileSync(fileName,"utf-8") ;
        let objWords = {} ; // {[word]: counter}
        //
        stringLines = stringLines.replace(/\n/g,' ').replace(/\r/g,' ').replace(/[-.,#]/g,' ')
        let arrayWords = String(stringLines).split(" ") ;
        for ( let posW=0; posW<arrayWords.length; posW++ ){
            let tempWord = arrayWords[posW] ;
            tempWord = tempWord.trim().toUpperCase() ;
            if ( tempWord.length>0 && DISCARD_WORDS.includes(tempWord)==false  ){
                if ( objWords[tempWord]==undefined ){
                    objWords[tempWord] = {
                        word: tempWord ,
                        counter: 1
                    } ;
                } else {
                    objWords[tempWord].counter = objWords[tempWord].counter+1 ;
                } ;
            } ;
        } ;
        //
        let outArrayWords = Object.values(objWords) ; //
        //
        return outArrayWords ;
        //
    } catch(errPW){
        console.log("***ERROR: ",errPW) ;
        throw errPW ;
    } ;
} ;
//
module.exports.parseWords = parseWords ;
//