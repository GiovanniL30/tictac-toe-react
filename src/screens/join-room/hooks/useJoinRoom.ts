import { useMutation } from "@tanstack/react-query";

import { roomsApi } from "../../../api/roomsApi";

export function useJoinRoom() {
  return useMutation({ mutationFn: roomsApi.join });
}
