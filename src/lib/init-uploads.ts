import fs from 'fs'
import path from 'path'

function initUploadsDirectory() {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const avatarsDir = path.join(uploadDir, 'avatars')

  // Create the main uploads directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  // Create the avatars directory if it doesn't exist
  if (!fs.existsSync(avatarsDir)) {
    fs.mkdirSync(avatarsDir, { recursive: true })
  }

  // Set permissions (optional, depending on your needs)
  fs.chmodSync(uploadDir, 0o755) // Set permissions for uploads directory
  fs.chmodSync(avatarsDir, 0o755) // Set permissions for avatars directory
}

module.exports = { initUploadsDirectory }
