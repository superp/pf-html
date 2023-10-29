function showHideFunction(parentClass, index = 0) {
  var elements = document.getElementsByClassName(parentClass);

  var moreText = elements[index].getElementsByClassName("more-text")[0];
  var showMoreBtn = elements[index].getElementsByClassName("show-more-btn")[0];
  var showLessBtn = elements[index].getElementsByClassName("show-less-btn")[0];

  if (moreText.style.display === "none" || moreText.style.display === "") {
    console.log(moreText);
    moreText.style.display = "inline";
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline";
  } else {
    moreText.style.display = "none";
    showMoreBtn.style.display = "inline";
    showLessBtn.style.display = "none";
  }
}
