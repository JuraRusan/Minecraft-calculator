import CN from "classnames";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Modal, Spacer, Typography } from "@/common/components/atoms";
import { languages, type LanguagesType } from "@/localization";
import { setSelectedLanguages, setSelectedTheme, useSelectedLanguages, useSelectedTheme } from "@/store";
import { themes, type ThemeType } from "@/theme";

import styles from "./Modals.module.scss";

type SettingsProps = {
  show: boolean;
  handleClose: () => void;
};

const Settings: FC<SettingsProps> = ({ show, handleClose }) => {
  const { t } = useTranslation();

  const activeLanguage = useSelectedLanguages();
  const activeTheme = useSelectedTheme();

  const handleSelectLanguage = (language: LanguagesType) => {
    setSelectedLanguages(language);
    handleClose();
  };

  const handleSelectTheme = (t: ThemeType) => {
    setSelectedTheme(t);
    handleClose();
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div className={CN(styles["wrapper_content"], styles["settings"])}>
        <Typography textAlign="center" fontSize={16} fontWeight={700} lineHeight={24} height={24}>
          {t(`app.general.modal.languages_title`)}
        </Typography>
        <div className={styles["box"]}>
          {(Object.keys(languages) as LanguagesType[]).map((language, index) => (
            <Button
              active={language === activeLanguage}
              className={styles["buttons"]}
              key={index}
              onClick={() => handleSelectLanguage(language)}
              label={languages[language]}
            />
          ))}
        </div>
        <Spacer height={24} />
        <Typography textAlign="center" fontSize={16} fontWeight={700} lineHeight={24} height={24}>
          {t(`app.general.modal.themes_title`)}
        </Typography>
        <div className={styles["box"]}>
          {(Object.keys(themes) as ThemeType[]).map((theme, index) => (
            <Button
              active={theme === activeTheme}
              className={styles["buttons"]}
              key={index}
              onClick={() => handleSelectTheme(theme)}
              label={themes[theme]}
              disabled={theme === "light"}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
