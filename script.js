backgrounds = [
  ["No", "#FF5858"],
  ["Occasional", "#FFE974"],
  ["Monthly", "#FFE974"],
  ["Daily*", "#C1EAAE"],
  ["Weekly", "#C1EAAE"],
  ["Intermittent", "#49D034"],
  ["Yes*", "#C1EAAE"],
  ["Within a range", "#C1EAAE"],
  ["None", "#FF5858"],
  ["Yes", "#49D034"],
  ["As they occur", "#49D034"]
]
function updateBG(element) {
  for (var i=0; i<backgrounds.length; i++) {
    if (element.innerHTML === backgrounds[i][0]) {
      element.style.background = backgrounds[i][1]
    }
  }
}

doc = document.getElementsByTagName("td");
for (var i=0; i<doc.length; i++) {
  updateBG(doc[i])
}

