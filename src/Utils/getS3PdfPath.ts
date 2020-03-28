import getProfile from "@profile";

const profile = getProfile();

function getS3PdfPath(subPath: string): string {
  return `${profile.assets.s3Pdf.basePath}${subPath ? subPath : ""}`;
}

export default getS3PdfPath;
