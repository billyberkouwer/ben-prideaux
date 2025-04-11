export function checkYoutubeLink(url: string) {
  // Define the regular expression for matching YouTube links
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|attribution_link\?a=)|youtu.be\/)([^\s&?/]{11})(?:[\s&?/].*)?$/i;

  // Test the URL against the regular expression

  return youtubeRegex.test(url);
}

export function parseRGBStringToNumbers(rgbString: string) {
  // Remove the 'rgb(' and ')' from the string
  const rgbValues = rgbString.match(/\d+/g)?.map(Number);

  console.log(rgbString);
  if (rgbValues) {
    // Normalize each value to a range of 0-1
    const red = rgbValues[0] / 255;
    const green = rgbValues[1] / 255;
    const blue = rgbValues[2] / 255;

    return { red, green, blue };
  }

  return { red: 0, green: 0, blue: 0 };
}
