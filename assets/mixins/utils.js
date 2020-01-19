var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/

function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1)
}

function basename(path, ext) {
  var f = posixSplitPath(path)[2]
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length)
  }
  return f
}

function splitpath(path) {
  let koner = posixSplitPath(path)
  return koner
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className)
  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

const util = {
  addClass(el, className) {
    if (el.classList) el.classList.add(className)
    else if (!hasClass(el, className)) el.className += ' ' + className
  },

  removeClass(el, className) {
    if (el.classList) el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className = el.className.replace(reg, ' ')
    }
  },
  extractFilename(html) {
    if (typeof html !== 'string') throw new Error('url must be a string')
    // Remove the QueryString
    return (
      html
        .replace(/\?.*$/, '')
        // Extract the filename
        .split('/')
        .pop()
        // Remove the extension
        .replace(/\.[^.]+$/, '')
    )
  },
  replaceWithAbsolute(html) {
    const replaceWith = 'https://mrsunshyne.gitlab.io'
    if (html === null) {
      return html
    } else {
      const URLReplaced = html
        .replace(/http:\/\/localhost:2368/g, replaceWith)
        .replace(/http:\/\/localhost:3000/g, replaceWith)
      return URLReplaced
    }
  },
  formatThumbnailImages(path, sizeParam) {
    const replaceWith = ''
    let size = sizeParam || '500'

    let pathObject = splitpath(path)
    let ext = pathObject[3]
    let dir = pathObject[1].replace(/content/g, 'thumbnail')
    let result = basename(path, ext)
    let filepath = `${dir}${result}-${sizeParam}w${ext}`
    const URLReplaced = filepath.replace(
      /http:\/\/localhost:2368/g,
      replaceWith
    )
    return URLReplaced
  },
  formatBodyImages(html) {
    const replaceWith = ''
    const URLReplaced = html.replace(/http:\/\/localhost:2368/g, replaceWith)
    return URLReplaced
  }
}

export default util
