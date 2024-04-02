import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dxDITOWtAz4dsgFyb7seZndx29"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
