import "./GameUserIDInputModal.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Snabbdom from "snabbdom-pragma";
import { VNode } from "@cycle/dom";
import { TextInputModal } from "./components/TextInputModal";

export function GameUserIDInputModal(showing: boolean): VNode {
  return (
    <div id="game-user-id-input-modal" className={showing ? "showing" : ""}>
      {TextInputModal(
        "ワールド内で使っているユーザーIDを入力\n(注: 現時点の対応プラットフォーム/ゲームはMinecraftのみです)",
        "通話に参加",
        "ユーザーID"
      )}
    </div>
  );
}
