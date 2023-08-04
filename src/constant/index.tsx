// breakpoints
const size = {
  small: "768px",
  medium: "1024px",
};

export const device = {
  small: `(max-width: ${size.small})`,
  medium: `(min-width: ${size.small}) and (max-width: ${size.medium})`,
  large: `(min-width: ${size.medium})`,
};
