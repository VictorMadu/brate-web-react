import React from "react";
import * as text from "../../language/en/app";
import Lists from "../../core/lists";
import ListItem from "./list-item";
import {
  updateDeleteFundNotificationAfter,
  updateDeletePriceAlertNotificationAfter,
  updateDeleteTradeNotificationAfter,
} from "../../use-case/auth/actions/update-web-user-data";

const SettingsNotificationLayout = () => {
  return (
    <>
      <section>
        <Lists>
          <ListItem
            text={text.remove_price_alert_notification_after}
            onSelect={updateDeletePriceAlertNotificationAfter}
          />
          <ListItem
            text={text.remove_trade_notification_after}
            onSelect={updateDeleteTradeNotificationAfter}
          />
          <ListItem
            text={text.remove_wallet_notification_after}
            onSelect={updateDeleteFundNotificationAfter}
          />
        </Lists>
      </section>
    </>
  );
};

export default SettingsNotificationLayout;
