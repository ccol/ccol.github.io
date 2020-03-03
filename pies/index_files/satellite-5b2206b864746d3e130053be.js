_satellite.pushAsyncScript(function(event, target, $variables){
  window.onload = function() {
    if (((location.href).includes("www.saints.com.au/news/cmc-trade-hub")) &&
        document.getElementsByClassName("billboard") != null) {
        $('.billboard')[0].style.cssText = 'padding:0px !important;margin: 0px -15px !important';
    }
  if (((location.href).includes("www.saints.com.au/news/cmc-trade-hub")) &&
        document.getElementsByClassName("secondary") != null) {
        $('.secondary')[0].style.cssText = 'padding:5px 0px !important';
    }
  
   if (((location.href).includes("www.nmfc.com.au")) &&
        document.getElementsByClassName("billboard") != null) {
        $('.billboard')[0].style.padding = "30px 0px 0px 0px";
        $('.billboard')[0].style.textAlign = "center";
        document.getElementsByTagName("body")[0].style.background = null;
    }
  
   if (((location.href).includes("tipping.essendonfc.com.au")) &&
        document.getElementsByClassName("clubs-footer") != null) {
        $('.clubs-footer')[0].style.display = 'block';
    }
  
  if ((location.href).includes("membership.sydneyswans.com.au")) 
    {
      if((document.getElementById("tmx-footer").children.length) == 9)
      {
      document.getElementById("tmx-footer").children[1].style.display = "none";
      document.getElementById("tmx-footer").children[2].style.display = "none";
      document.getElementById("tmx-footer").children[3].style.display = "none";
      document.getElementById("tmx-footer").children[4].style.display = "none";
      document.getElementById("tmx-footer").children[5].style.display = "none";
      document.getElementById("tmx-footer").children[6].style.display = "none";
      }
    }
};
});
