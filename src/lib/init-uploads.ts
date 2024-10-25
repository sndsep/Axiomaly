import fs from 'fs'
import path from 'path'

function initUploadsDirectory() {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }
}

module.exports = { initUploadsDirectory }
