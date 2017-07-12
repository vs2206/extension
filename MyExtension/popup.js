
function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
	  /*{code:"document.body.style.backgroundImage = 'url('http://interfacelift.com/wallpaper/D307f62b/03514_duskatlakezurich_1440x900.jpg')'"});*/
	
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
