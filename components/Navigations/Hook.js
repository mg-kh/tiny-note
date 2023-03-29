import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { themeChange } from "theme-change";

const Hook = () => {
  const [theme, setTheme] = useState("");
  const router = useRouter();
  const { pathname } = router;
  const {
    query: { id },
  } = router;

  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    if (!theme) {
      setTheme("winter");
      localStorage.setItem("theme", "winter");
    }
  }, []);

  const handleGoToEdit = () => {
    router.push(`${EDITOR}/${id}`);
  };

  const handleBack = () => {
    router.back();
  };

  return {
    theme,
    pathname,
    // actions
    handleGoToEdit,
    handleBack,
    setTheme,
  };
};

export default Hook;
