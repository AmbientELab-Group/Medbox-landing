import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t("pageTitle")} | Ambient</title>
    </Helmet>
  );
};

export default SEO;
