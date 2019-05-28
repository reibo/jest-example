import {Image} from '../snapshot/image.model';

const IMAGE_SOURCE = 'https://source.unsplash.com/random/400x300';

function generateRandomUrl(id: number) {
  return `url("${IMAGE_SOURCE}?sig=${id})`;
}

function getRows(id: number, totalElements: number, maxCols: number) {
  return (totalElements - id) % maxCols || 1;
}


function getCols(id: number, maxCols: number) {
  return Math.floor((id % maxCols) / 3 + 1);
}

export function listImages(totalImages: number, maxCols: number): Image[] {
  const images: Image[] = [];
  for (let i = 0; i < totalImages; i++) {
    images.push({
      id: i,
      src: generateRandomUrl(i),
      rows: getRows(i, totalImages, maxCols),
      cols: getCols(i, maxCols)
    });
  }
  return images;
}
