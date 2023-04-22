export const strapiImage = (image, size) => {
  if (!image?.formats?.[size]) return `${process.env.NEXT_PUBLIC_IMAGE_PROVIDER}${image.url}`;
  return `${process.env.NEXT_PUBLIC_IMAGE_PROVIDER}${image.formats[size].url}`;
};

export const catchAsync = async (cb, fallbackValue) => {
  try {
    return await cb();
  } catch (error) {
    return fallbackValue;
  }
};
