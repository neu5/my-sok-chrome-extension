sendSelection = function(pageObj) {
  var s = pageObj.selectionText;
  var pageUrl = pageObj.pageUrl;
  var query = '?s=' + s + '&url=' + pageUrl;
  
  // @todo: send query to the server
};

chrome.contextMenus.create({
  title: 'Save to your Source of Knowledge',
  contexts:['selection', 'page', 'link'],
  onclick: sendSelection
});
