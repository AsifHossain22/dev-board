// getInnerTextByIdAndConvertAsNumber
function getInnerTextByIdAndConvertToNumber(id) {
  const innerText = document.getElementById(id).innerText;
  const convertedInnerText = parseInt(innerText);
  return convertedInnerText;
}

// setInnerTextByIdAndValue
function setInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

// getInnerTextById
function getInnerTextById(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
