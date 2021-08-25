module.exports = function check(str, bracketsConfig) {

	let cases = []
    
    for (let i = 0; i < bracketsConfig.length; i++) { 
    	cases.push(bracketsConfig[i][0] + bracketsConfig[i][1])
    }
		
	for (let i = 0; i < str.length; i++) { 
		for (let j = 0; j < bracketsConfig.length; j++) { 
			while (str.includes(cases[j], 0)) {
            	str = str.replace(cases[j], "");
			}
		
		}
	}
	
	if (str === '()') {  
		return true
	}

	else {
		return str === ''
	} 
	
	
}
