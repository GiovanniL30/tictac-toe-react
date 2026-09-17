import { useQuery } from "@tanstack/react-query";

import { roomKeys } from "../../../api/queryKeys";
import { roomsApi } from "../../../api/roomsApi";

export const useRoom = (roomCode: string) => {
  return useQuery({
    queryKey: roomKeys.detail(roomCode),
    queryFn: () => roomsApi.get(roomCode),
    enabled: Boolean(roomCode),
    staleTime: Infinity,
  });
};
