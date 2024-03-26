export const formDataLogicFourthPage = (formState) => {
  const isPrivate = formState.isPrivate;
  let eventVisibilityType;
  if (!isPrivate) {
    eventVisibilityType = "Public";
  } else {
    eventVisibilityType = formState.visibilityOption;
  }

  let eventAccessPassword;
  if (eventVisibilityType !== "Link") {
    eventAccessPassword = "";
  } else {
    eventAccessPassword = formState.accessPassword;
  }

  return {
    eventFourthPageDetails: {
      eventId: formState.eventId,
      visibilityOption: eventVisibilityType,
      accessPassword: eventAccessPassword,
    },
  };
};
