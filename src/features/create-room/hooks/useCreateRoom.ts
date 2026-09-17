import { useMutation } from "@tanstack/react-query";

import { roomsApi } from "../../../api/roomsApi";

export const useCreateRoom = () => {
  return useMutation({ mutationFn: roomsApi.create });
};
