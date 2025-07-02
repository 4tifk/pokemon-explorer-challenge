  export default function cleanInput(input) {
    let cleaned;
    // regex to remove punctuation except "-"
    cleaned = input.replace(/[^\w\s-]/g, "");
    // remove trailing spaces
    cleaned = cleaned.trim();   
    cleaned = cleaned.toLowerCase();
    // replace spaces with dashes so it can be searched
    cleaned = cleaned.replace(" ", "-");
    return cleaned;
  }