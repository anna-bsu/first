function createAutoComplete(words){
	return function (word){
		      if( word === '' || word === undefined) {
				  return [];
			  }
              return words.filter(item => item.toLowerCase().indexOf(word.toLowerCase(word)) === 0);
	        }
}
export default createAutoComplete;/*module.exports = {
createAutoComplete,
};
*/