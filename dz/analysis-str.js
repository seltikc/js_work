const path = "/users/download/index.html"

const isHtml = function(path) {

  const required = ".html";
  
  const pathExt = path.slice(-5);

  if (pathExt == required) {

    return true

  } else {

    return false
  }
}

console.log(isHtml(path));