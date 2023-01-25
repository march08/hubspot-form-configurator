export const windowBlur = () => {
  try {
    (document?.activeElement as HTMLElement)?.blur();
    // eslint-disable-next-line
  } catch {}
};
