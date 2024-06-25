import React from 'react'
import dompurify from 'dompurify';
import styles from './dark-theme.module.css'

const sanitize = dompurify.sanitize

const Gist = ({
  url,
  file,
  LoadingComponent,
  ErrorComponent,
  onError,
  onLoad,
  colorMode = 'light'
}) => {
  const [gistContent, setGistContent] = React.useState('')
  const [gistIsFetching, setGistIsFetching] = React.useState(true)
  const [gistError, setGistError] = React.useState(false)

  // The Gist JSON data includes a stylesheet file.
  // We ensure to add that file only one time in our page.
  const addGistStylesheetIfNotExist = (stylesheetHref) => {
    if (![].some.call(document.head.getElementsByTagName('link'), link => link.href === stylesheetHref)) {
      let link = document.createElement('link');
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = stylesheetHref;
      document.head.appendChild(link);
    }
  }

  // Extract a string in form `username/uniqueValue` from the provided Gist url.
  const getGistURL = () => (url).match(/(\.com\/)(.*?)([^#]+)/)?.pop() ?? null

  const getGistFilePath = () => {
    // If `file` prop was provided return that.
    if (file != null) {
      return `&file=${file}`
    }

    // Else construct the file parameter from the `url` prop.
    const fileURL = (url).split('#').pop()

    // If the file parameter exist in Gist url return that file.
    if (fileURL.match(/file*/) != null) {
      return `&file=${fileURL.replace('file-', '').replace('-', '.')}`
    }

    // Else the user wants to link the whole Gist repository.
    return ''
  }

  const buildGistScriptURL = (currentGistCallback) => {
    const id = getGistURL()

    if (!id) {
      return null
    }

    const file = getGistFilePath()
    return `https://gist.github.com/${id}.json?callback=${currentGistCallback}${file}`
  }

  const getNextGistId = () => {
    Gist.currentGistCallbackId += 1
    return Gist.currentGistCallbackId
  }

  const handleError = () => {
    setGistError(true)
    setGistIsFetching(false)
    onError?.()
  }

  React.useEffect(() => {
    const currentGistCallback = 'embed_gist_callback_' + getNextGistId()

    window[currentGistCallback] = (gist) => {
      addGistStylesheetIfNotExist(gist.stylesheet)
      setGistContent(gist.div)
      setGistIsFetching(false)
      onLoad?.()
    }

    const gistScriptSrc = buildGistScriptURL(currentGistCallback)

    if (!gistScriptSrc) {
      handleError()
    }

    const gistScript = document.createElement('script')
    gistScript.type = 'text/javascript'
    gistScript.src = gistScriptSrc
    gistScript.onerror = handleError
    document.head.appendChild(gistScript)
  }, [])

  const applyTheme = (gist) => {
    gist.classList.add(styles.gist)

    const themable = gist.querySelectorAll("[data-color-mode]");

    themable.forEach((element) => {
      element.setAttribute('data-dark-theme', 'dark')
    })

    themable.forEach((element) => {
      element.setAttribute('data-color-mode', colorMode)
    })
  }


  const gist = React.useRef(null)
  const changeListener = () => {
    if (gist.current) applyTheme(gist.current)
  }

  const themingCallback = React.useCallback((node) => {
    applyTheme(node)

    new MutationObserver(changeListener).observe(node, {
      subtree: true,
      childList: true
    })

    gist.current = node
  }, [])

  React.useEffect(changeListener, [colorMode])

  if (gistIsFetching && LoadingComponent) {
    return <LoadingComponent/>
  }

  if (gistError && ErrorComponent) {
    return <ErrorComponent/>
  }

  return <div dangerouslySetInnerHTML={{__html: sanitize(gistContent)}} ref={themingCallback}/>
}

Gist.currentGistCallbackId = 0

export default Gist
