import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-image-to-pdf' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ImageToPdf = NativeModules.ImageToPdf
  ? NativeModules.ImageToPdf
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );


interface CreatePdfOptions {
    imagePaths: string[],
    name: string,
    maxSize?: {
        width: number,
        height: number,
    }
    quality?: number,
}

interface GeneratedPDF {
    filePath: string
}

function createPDFbyImages(options: CreatePdfOptions): Promise<GeneratedPDF> {
  return ImageToPdf.createPDFbyImages(options);
}

export default {
    createPDFbyImages
}
