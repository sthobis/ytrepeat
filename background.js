chrome.tabs.getSelected(null, function(tab){
  var tabUrl = tab.url;
  if (tab.url.indexOf("youtube") != -1) {
	  var newUrl = tabUrl.replace("youtube","listenonrepeat");
	  chrome.tabs.update(tab.id, {url: newUrl});
  }
  document.getElementById("yturl").innerHTML = "<a href='"+tab.url+"'>Redirected</a>";
})