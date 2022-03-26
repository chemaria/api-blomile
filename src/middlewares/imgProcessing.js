const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb) => {
    cb(null, file.originalname)
    console.log(req.file)
  },
})
const uploadImage = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('imageBlomali')

module.exports = uploadImage
