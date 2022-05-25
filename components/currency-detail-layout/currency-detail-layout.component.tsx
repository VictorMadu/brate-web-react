import React from "react";
import * as styles from "./currency-detail-layout.styles";
import CurrencyPairSection from "./currency-pair-section/currency-pair-section.component";
import BtnGroupSection from "./btn-group-section/btn-group-section.component";
import { ConvertSection, SetAlertSection } from "./feature-section";
import { showSection } from "./feature-section/constant";
import SwitchCase from "../../core/switch-case";
import { useCurrencyDetail } from "./hook";

// TODO: All Components with container in their names that are not actually containerr should be renamed. Containers should be in the same folder with conmponent the are to contain
const CurrencyDetailLayout = () => {
  const { section, handleSectionChange } = useCurrencyDetail();
  return (
    <div className={styles.container()}>
      <CurrencyPairSection />
      <BtnGroupSection handleSetSection={handleSectionChange} />
      <SwitchCase
        value={section}
        cases={{
          [showSection.CONVERT_SECTION]: ConvertSection,
          [showSection.SET_ALERT_SECTION]: SetAlertSection,
        }}
      />
    </div>
  );
};

export default CurrencyDetailLayout;
