import { useMutation } from "@tanstack/react-query";

import { roomsApi } from "../../../api/roomsApi";

export function useLeaveRoom() {
  return useMutation({ mutationFn: roomsApi.leave });
}
