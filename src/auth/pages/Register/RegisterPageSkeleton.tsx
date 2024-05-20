import { Skeleton } from "@mui/material";

export const RegisterFormSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" width={400} height={50} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={400} height={50} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={400} height={50} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={400} height={50} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={400} height={50} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={400} height={40} sx={{ mb: 2 }} />
    </>
  );
};
