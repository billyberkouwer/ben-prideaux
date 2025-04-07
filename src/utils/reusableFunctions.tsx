export function checkYoutubeLink(url: string) {
  // Define the regular expression for matching YouTube links
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|attribution_link\?a=)|youtu.be\/)([^\s&?/]{11})(?:[\s&?/].*)?$/i;

  // Test the URL against the regular expression
 
  return youtubeRegex.test(url);
}
