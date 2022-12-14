import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>HYPlayerInfo</h2>
          <h2>HYPlayerContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYSimPlaylist</h2>
          <h2>HYSimSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
