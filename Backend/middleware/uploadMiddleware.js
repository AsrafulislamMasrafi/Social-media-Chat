const multer = require("multer");
const path = require("path");
const UPLOAD_FOLDER = "uploads/";

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    // Generate File Name
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

exports.upload = multer({
  // dest: UPLOAD_FOLDER,
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10mb
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif" ||
      file.mimetype === "image/svg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("only .png .jpeg .jpg .svg format allowed"));
    }
  },
});
