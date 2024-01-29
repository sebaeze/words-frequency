/*
*   Generate report based on array received by argument
*/
const log = console.log ;
const LENGTH_WORD = 60 ;
//

const report = (data) => {
    try {
        //
        let argArrayData = data.sort((a,b)=>{ return b.counter-a.counter; }) ;
        log("\n\n\n Report of words most frequently used\n") ;
        log("Word Counter") ;
        log("---- -------") ;
        for ( let posW=0; posW<argArrayData.length; posW++ ){
            let elemWord = argArrayData[posW] ;
            let tempWord = " ".repeat(LENGTH_WORD)+elemWord.word ;
            log( tempWord.substr((tempWord.length-LENGTH_WORD),LENGTH_WORD)+" "+elemWord.counter  );
        } ;
        //
    } catch(errRep){
        throw errRep ;
    } ;
} ;
//
module.exports.report = report ;
//