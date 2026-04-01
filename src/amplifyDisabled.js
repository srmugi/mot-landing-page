const emptyContent = new Proxy(
  {},
  {
    get: () => "",
  }
);

export const amplifyDisabledMessage =
  "Amplify-backed content is currently unavailable.";

export const amplifyDisabledFormMessage =
  "This form is currently unavailable because the Amplify backend integration has been disabled.";

export { emptyContent };
