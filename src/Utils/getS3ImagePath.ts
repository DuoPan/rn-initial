import getProfile from "@profile";

const profile = getProfile();

function getS3ImagePath(subPath: string): string {
  return `${profile.assets.s3Image.basePath}${subPath ? subPath : ""}`;
}

export default getS3ImagePath;
