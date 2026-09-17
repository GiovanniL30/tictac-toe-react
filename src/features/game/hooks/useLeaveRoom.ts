import { useMutation } from "@tanstack/react-query";

import { roomsApi } from "../../../api/roomsApi";

export const useLeaveRoom = () => {
  return useMutation({ mutationFn: roomsApi.leave });
};
