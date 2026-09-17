import { useMutation } from "@tanstack/react-query";

import { lobbyApi } from "../../../api/lobbyApi";

export function useCreateRoom() {
  return useMutation({ mutationFn: lobbyApi.createRoom });
}
