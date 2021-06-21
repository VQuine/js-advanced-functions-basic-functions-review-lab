                        // I M P L E M E N T   FUNCTION DECLARATION
function saturdayFun(firstParameter = `roller-skate`){
    return `This Saturday, I want to ${firstParameter}!`;
    // BACK TICKS ` ` for S T R I N G   L I T E R A L 
    // ${E X P R E S S I O N} <- - - P L A C E H O L D E R
};
// H O I S T E D - can be called before declaration

                        // I M P L E M E N T   FUNCTION EXPRESSION 
/*
function mondayWork(firstParameter = `go to the office`){
    return `This Monday, I will ${firstParameter}.`
}
*/
let mondayWork = function(firstParameter = 'go to the office'){
    return `This Monday, I will ${firstParameter}.`
}
// N O T   H O I S T E D
// MUST BE INVOKED by P O I N T E R and ( ) : 'functionExpression()'
// 'functionExpression' without invokation - F R O Z E N

                        // I M P L E M E N T    SCOPE CHAIN
function wrapAdjective(parameter = "*"){
//P A R E N T
    return function(singleParameter = "special"){
        return `You are ${parameter}${singleParameter}${parameter}!`
    }
    // I N N E R   F U N C T I O N
}


//= = = = = = = = = = = = = = = = = = = = = = = = =
/*
INDICATES D E S T R U C T U R I N G ARRAY
-PATTERN -'[ ]'
		1	2
const [answer, theBase] = (

	INDICATES F U N C T I O N   E X P R E S S I O N 
	-NO NAME -INSIDE '( )'
	P A R E N T   FUNCTION
	function(thingToAdd) { const base = 3;
	
	DESTRUCTURING VARIABLES STORE THESE 2 FUNCTIONS 
	-INSIDE '[ ]'
	FUNCTIONS ARE C L O S U R E S - ALLOWS EXECUTED VALUES TO BE SEEN
	-'RETURN'S
			1								2
      return [function() { return base + thingToAdd; }, function() { return base; }];
    }
    
   I M M E D I A T E L Y   I N V O K E D WITH 2ND () 
  )(2) 
*/
//= = = = = = = = = = = = = = = = = = = = = = = = =

const Calculator = {}