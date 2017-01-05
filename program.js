function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message;
  });
}

/*function getShortMessages(messages){
	return messages.filter(function(item){
		return item.messages.length < 50;
	}).map(function(item){
		return item.message;
	});
}
Array.prototype.message = function(){
	return this.message;
}*/
module.exports = getShortMessages;

