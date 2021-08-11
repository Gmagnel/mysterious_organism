// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (num, arrDNA) => {
  return {specimenNum:num,  
          dna:mockUpStrand(),
          mutate(){
           // console.log('new')
           const newDNA = []
  for (let i = 0; i < 15; i++) {
    do{
      var temp = returnRandBase();   
    }    
    while ( temp === this.dna[i]){
      newDNA.push(temp);
    }
  }
  return newDNA
          },
  compareDNA(compareArr){
          const tempArr = [];
          for (let i = 0; i <15; i++){
            if( this.dna[i] === compareArr[i]){
              tempArr.push(this.dna[i]);
            }
            var percent = Math.floor((tempArr.length / compareArr.length )* 100)
          }
        return `specimen #1 and specimen #2 have ${percent}% DNA in common`
        }, 
  willLikelySurvive(){
        var count = 0; 
        for (let i = 0; i < 15; i++){
          if (this.dna[i] === 'C' || this.dna[i] === 'G' ){
            count ++
          }
         
      }
     // console.log(count)
       if ((count / 15) >= 0.6){
            return true;
          } else{
            return false}
        }
    }
}

const e = pAequorFactory(1,mockUpStrand());
// console.log(e.arrDNA);
// console.log(e.mutate());
// console.log(e.compareDNA(mockUpStrand()));
// console.log(e.willLikelySurvive());

var pAequor = [];
var num = 0;
//console.log(instance);
while (pAequor.length < 30){
  var instance = pAequorFactory(num,mockUpStrand());
if(instance.willLikelySurvive() === true && !pAequor.includes(instance)){
 pAequor.push(instance.dna);
//   console.log(pAequor.length)
num++
  }
 }
 console.log(pAequor)