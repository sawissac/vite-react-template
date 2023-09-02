import React from "react";

export const useTitle = (title: string) => {
  const documentDefined = typeof document !== "undefined";

  React.useEffect(() => {
    if (!documentDefined) return;
    if (document.title !== title) document.title = title;
    return () => {
      document.title = import.meta.env.VITE_APP_TITLE;
    };
  }, [documentDefined, title]);
};
