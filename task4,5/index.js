module.exports = '../index.js';
let const autocomplete = function createAutoComplete(words){
	return function (word){
		      if( word === '' || null || undefined) {
				  return [];
			  }
              return words.filter(item => item.toLowerCase().indexOf(word.toLowerCase(word)) === 0);
	        }
}
