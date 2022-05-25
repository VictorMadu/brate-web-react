import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface RouterProps {
  path: string;
}

const PushRoute = ({ path }: RouterProps) => {
  const router = useRouter();
  router.push(path);
  return <></>;
};

export default PushRoute;
