chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  // Define folder paths for each category
  const folders = {
    images: "Images/",
    videos: "Videos/",
    audio: "Audio/",
    documents: "Documents/",
    archives: "Archives/",
    scripts: "Scripts/",
    software: "Software/",
    others: "Others/" // For all uncategorized file types
  };

  // Map file extensions to folder categories
  const extensionFolderMap = {
    images: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
    videos: ['mp4', 'mkv', 'avi', 'mov', 'wmv', 'flv', 'webm'],
    audio: ['mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a'],
    documents: ['pdf', 'docx', 'xlsx', 'pptx', 'txt', 'rtf', 'csv', 'odt'],
    archives: ['zip', 'rar', 'tar', '7z', 'gz', 'bz2'],
    scripts: ['js', 'html', 'css', 'xml', 'json', 'php'],
    software: ['exe', 'dmg', 'apk', 'deb', 'msi'],
  };

  // Get the file extension (lowercase)
  const extension = downloadItem.filename.split('.').pop().toLowerCase();

  // Default folder (if the extension doesn't match any category)
  let folderPath = folders.others;

  // Check which category the file belongs to
  for (let category in extensionFolderMap) {
    if (extensionFolderMap[category].includes(extension)) {
      folderPath = folders[category];
      break;
    }
  }

  // Suggest the folder path for the download
  suggest({ filename: folderPath + downloadItem.filename });
});
