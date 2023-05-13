import { useEffect, useState } from "react";

const useSpectatorsAllowed = (
  params: URLSearchParams,
  battleRoomId: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [spectatorsAllowed, setSpectatorsAllowed] = useState(true);
  useEffect(() => {
    if (params.get("noSpectators")) {
      setSpectatorsAllowed(false);
    }
  });
  useEffect(() => {
    if (battleRoomId.split("-").length > 3) {
      setSpectatorsAllowed(false);
    }
  }, [battleRoomId]);
  return [spectatorsAllowed, setSpectatorsAllowed];
};
export default useSpectatorsAllowed;
