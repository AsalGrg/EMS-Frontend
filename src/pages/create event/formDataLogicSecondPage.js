export default function formDataLogicSecondPage(secondPageFormData) {
  const aboutEvent = secondPageFormData.aboutEvent;

  const hasStarring = secondPageFormData.hasStarring;

  var starrings = null;

  if (hasStarring) {
    starrings = secondPageFormData.starrings;
  }

  console.log(secondPageFormData.coverImage)
  let eventCoverImageURL;
  if(typeof secondPageFormData.coverImage==='string'){
    eventCoverImageURL= secondPageFormData.coverImage;
  }else{
    eventCoverImageURL= null;
  }

  return {
    eventSecondPageDetails: {
      eventId: secondPageFormData.eventId,
      aboutEvent: aboutEvent,
      hasStarring: hasStarring,
      eventCoverImage: eventCoverImageURL
    },
    eventCoverImage: secondPageFormData.coverImage,
    starrings: starrings,
  };
}
