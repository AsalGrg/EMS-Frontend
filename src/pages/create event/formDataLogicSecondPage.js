export default function formDataLogicSecondPage(secondPageFormData) {
  const aboutEvent = secondPageFormData.aboutEvent;

  const hasStarring = secondPageFormData.hasStarring;

  var starrings = null;

  if (hasStarring) {
    starrings = secondPageFormData.starrings;
  }

  return {
    eventSecondPageDetails: {
      eventId: secondPageFormData.eventId,
      aboutEvent: aboutEvent,
      hasStarring: hasStarring,
    },
    eventCoverImage: secondPageFormData.coverImage,
    starrings: starrings,
  };
}
