backgrounds = [
  ["No", "#FF5858"],
  ["Occasional", "#FFE974"],
  ["Indirectly location*", "#FFE974"],
  ["Some indirectly", "#FFE974"],
  ["Most locations", "#FFE974"],
  ["Province only", "#FFE974"],
  ["Partial", "#FFE974"],
  ["Monthly", "#FFE974"],
  ["Daily*", "#C1EAAE"],
  ["Weekly", "#49D034"],
  ["Most stated", "#C1EAAE"],
  ["Weekly range only", "#C1EAAE"],
  ["Monthly range only", "#C1EAAE"],
  ["Intermittent", "#C1EAAE"],
  ["Yes*", "#C1EAAE"],
  ["Within a range", "#C1EAAE"],
  ["None", "#FF5858"],
  ["Yes", "#49D034"],
  ["Location", "#49D034"],
  ["All stated", "#49D034"],
  ["Daily", "#49D034"],
  ["As they occur", "#49D034"]
]
function updateBG(element) {
  for (var i=0; i<backgrounds.length; i++) {
    if(element.innerHTML === backgrounds[i][0]) {
      element.style.background = backgrounds[i][1]
    }
  }
}

doc = document.getElementsByTagName("td");
for (var i=0; i<doc.length; i++) {
  updateBG(doc[i])
}
difffreq = document.getElementsByClassName("difffreq");
for (var i=0; i<difffreq.length; i++) {
  difffreq[i].style.background = "#C1EAAE";
}
