const fs = require("fs");

// 1. Create file
fs.writeFile("demo.txt", "Hello World!", (err) => {
  if (err) {
    console.log("Error creating file");
    return;
  }
  console.log("File created successfully");

  // 2. Read file
  fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file");
      return;
    }
    console.log("File content:", data);

    // 3. Append data
    fs.appendFile("demo.txt", "\nAppended text", (err) => {
      if (err) {
        console.log("Error appending file");
        return;
      }
      console.log("Data appended successfully");

      // 4. Delete file
      fs.unlink("demo.txt", (err) => {
        if (err) {
          console.log("Error deleting file");
          return;
        }
        console.log("File deleted successfully");
      });
    });
  });
});