import { useEffect, useState } from "react";

const useSpectatorsAllowed = (
  params: URLSearchParams,
  battleRoomId: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [spectatorsAllowed, setSpectatorsAllowed] = useState(true);
  useEffect(() => {
    if (params.get("noSpectators")) {
      console.log("spec", params.get("noSpectators"));
      setSpectatorsAllowed(false);
    }
  });
  useEffect(() => {
    if (battleRoomId.split("-").length > 3) {
      console.log("battleRoomId", battleRoomId);
      console.log("spectatorsAllowed", false);
      setSpectatorsAllowed(false);
    }
  }, [battleRoomId]);
  return [spectatorsAllowed, setSpectatorsAllowed];
};
export default useSpectatorsAllowed;
