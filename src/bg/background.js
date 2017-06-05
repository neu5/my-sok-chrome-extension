sendSelection = function(pageObj) {
  var s = pageObj.selectionText;
  var pageUrl = pageObj.pageUrl;
  var query = 'http://localhost:9020/add' + '?s=' + s + '&url=' + pageUrl;
  
  //  chrome.tabs.create({url: query});
  // var jax = new XMLHttpRequest();
  // jax.open("GET","http://localhost:9020/add");
  // jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  // jax.send("text=" + seltext);
  // jax.onreadystatechange = function() { if(jax.readyState==4) { alert(jax.responseText);  }}
  var browserRequest = new XMLHttpRequest();
  browserRequest.open('GET', query, true);
  browserRequest.sned(null);
};

chrome.contextMenus.create({
  title: 'Save to your Source of Knowledge',
  contexts:['selection', 'page', 'link'],
  onclick: sendSelection
});
