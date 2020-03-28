import getProfile from "@profile";

const profile = getProfile();

function getImagePath(subPath: string): string {
  return /^http.+/.test(subPath)
    ? subPath
    : `${profile.assets.image.basePath}${subPath ? subPath : ""}`;
}

export default getImagePath;
