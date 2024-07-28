const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, 'build');
const distPath = path.join(__dirname, 'dist');

// Function to delete a directory recursively
const deleteFolderRecursive = function (folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
};

// Delete the existing dist directory if it exists
if (fs.existsSync(distPath)) {
    deleteFolderRecursive(distPath);
}

// Rename the build directory to dist
if (fs.existsSync(buildPath)) {
    fs.renameSync(buildPath, distPath);
    console.log('Build directory renamed to dist');
} else {
    console.error('Build directory does not exist');
}
