const getCroppedImageUrl = (url: String) => {
  const target = "media/";
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + 'crop/600/400' + url.slice;
};

export default getCroppedImageUrl;
