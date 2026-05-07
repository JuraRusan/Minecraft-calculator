import CN from "classnames";
import i18n from "i18next";
import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { TransLink, Typography } from "@/common/components/atoms";
import General from "@/pages/general/General.tsx";
import { useAppSelector } from "@/store";

import styles from "./App.module.scss";

function App() {
  const { t } = useTranslation();

  const lang = useAppSelector((state) => state.selectedLanguages);
  const theme = useAppSelector((state) => state.selectedTheme);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles["main"]}>
      <div className={CN(styles["glow"], styles["_one"])} />
      <div className={CN(styles["glow"], styles["_two"])} />
      <div className={CN(styles["glow"], styles["_three"])} />
      <div className={CN(styles["glow"], styles["_four"])} />
      <General />
      <div className={styles["footer"]}>
        <Typography textAlign="center" fontSize={14} lineHeight={18} fontWeight={500}>
          {t(`app.footer.notifications_product`)}
        </Typography>
        <Typography textAlign="center" fontSize={14} lineHeight={18} fontWeight={500}>
          <Trans
            i18nKey="app.footer.report"
            components={[<TransLink href="https://github.com/JuraRusan/Minecraft-calculator" />]}
          />
        </Typography>
      </div>
    </div>
  );
}

export default App;
