export const handleError = (error) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function convertAspectRatio(aspectRatio, fixedDimension, isWidthFixed = true) {
  // Ensure aspectRatio is a string
  if (typeof aspectRatio !== 'string') {
    throw new TypeError('aspectRatio should be a string in the format "width:height"');
  }

  // Split the aspect ratio into width and height components
  const [widthRatio, heightRatio] = aspectRatio.split(':').map(Number);

  // Check if the ratios are valid numbers
  if (isNaN(widthRatio) || isNaN(heightRatio) || widthRatio <= 0 || heightRatio <= 0) {
    throw new Error('Invalid aspect ratio format. Please provide it as "width:height", e.g., "16:9".');
  }

  if (isWidthFixed) {
    // Calculate the height based on the fixed width
    const height = (fixedDimension / widthRatio) * heightRatio;
    return { width: fixedDimension, height: Math.round(height) };
  } else {
    // Calculate the width based on the fixed height
    const width = (fixedDimension / heightRatio) * widthRatio;
    return { width: Math.round(width), height: fixedDimension };
  }
}

export function getAspectRatio(width, height) {
  // Function to compute the greatest common divisor (GCD)
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // Calculate GCD of width and height
  const divisor = gcd(width, height);

  // Return the aspect ratio in "width:height" format
  return `${width / divisor}:${height / divisor}`;
}

export function getRandomPrompt(prompts) {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  return prompts[randomIndex];
}
