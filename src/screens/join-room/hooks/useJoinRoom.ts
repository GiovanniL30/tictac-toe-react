import { useMutation } from "@tanstack/react-query";

import { lobbyApi } from "../../../api/lobbyApi";

export function useJoinRoom() {
  return useMutation({ mutationFn: lobbyApi.joinRoom });
}
