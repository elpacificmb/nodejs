const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  )

  // Extension of file
  let extname = path.extname(filePath)

  // Initial content type
  let contentType = 'text/html'

  // Check ext and set content type
  switch(extname) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
    case '.pdf':
      contentType = 'text/pdf'
      break
  }

  //Read File
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content, 'utf8')
          }
        )
      } else {
        // Server error
        res.writeHead(500)
        res.end(`Server Error: ${error.code}`)
      }
    } else {
      // Successful
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf8')
    }
  })

})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))