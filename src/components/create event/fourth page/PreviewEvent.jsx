import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PreviewEvent = () => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String); // Resolve with the Base64 string
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const convertStarringImage = async (starrings) => {
    try {
      const starringsWithBase64Images = await Promise.all(starrings.map(async (each) => {
        try {
          const base64String = await getBase64(each.starringPhoto);
          return {
            starringPhoto: base64String,
            starringName: each.starringName,
          };
        } catch (error) {
          console.error("Error:", error);
          // Handle any errors that occurred during conversion
          return null; // Or some default value indicating an error
        }
      }));
      return starringsWithBase64Images;
    } catch (error) {
      console.error("Error:", error);
      return []; // Return empty array if an error occurred
    }
  };
  const handlePreviewEventClick =async () => {
    let coverImageBase64 = null;
    let convertedStarrings= []

    await getBase64(formData.coverImage)
      .then((base64String) => {
        coverImageBase64 = base64String;
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during conversion
      });

      await convertStarringImage(formData.starrings)
      .then((convertedStarringsResult) => {
        convertedStarrings = convertedStarringsResult;
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during conversion
      });


    const data = {
      eventAccessType: "preview",
      coverImage: coverImageBase64,
      eventDates: formData.eventDates,
      eventTitle: formData.eventTitle,
      locationType: formData.venueType,
      physicalLocationDetails: formData.selectedPlace
        ? {
            lat: formData.selectedPlace.lat,
            lon: formData.selectedPlace.lon,
            display_name: formData.selectedPlace.display_name,
          }
        : null,
      ticketDetails: {
        ticketType: formData.ticketType,
        ticketName: formData.ticketName,
        ticketPrice: formData.ticketPrice,
        ticketBookedQuantity: 0,
      },
      aboutEvent: formData.aboutEvent,
      hasStarring: formData.hasStarring,
      starrings: formData.hasStarring
        ? convertedStarrings
        : null,
    };

    localStorage.setItem("previewEventData", JSON.stringify(data));
  };

  return (
    <div className="row shadow rounded">
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <div>
          {!formData.coverImage ? (
            <p>SVG HERE</p>
          ) : (
            <img
              src={URL.createObjectURL(formData.coverImage)}
              className="defaultImage"
            />
          )}
        </div>
      </div>
      <div className="col-md-6 col-12 pt-2">
        <h5 className="mb-2">
          {formData.eventTitle ? formData.eventTitle : "Event Title"}
        </h5>

        {/* <p>Monday, January 22, 2024 at 7:00 PM +0545</p> */}
        <p className="mb-2">
          {formData.eventDates[0] != null || formData.eventStartTime != null
            ? `${
                formData.eventDates[0]
                  ? String(formData.eventDates[0]).substring(0, 16)
                  : ""
              } ${
                formData.eventStartTime ? "at " + formData.eventStartTime : ""
              }`
            : "Event Date"}
        </p>
        <div
          className="previewAddtionalDetails"
          style={{ display: "flex", columnGap: "30px" }}
        >
          <div className="ticketPriceContainer">
            <p>
              <i class="fa-solid fa-ticket"></i>
            </p>
            <p>
              {formData.ticketPrice !== null
                ? "Rs " + formData.ticketPrice
                : "--"}
            </p>
          </div>

          <div className="ticketPriceContainer">
            <p>
              <i class="fa-regular fa-user"></i>
            </p>
            <p>
              {formData.ticketQuantity !== null
                ? formData.ticketQuantity
                : "--"}
            </p>
          </div>
        </div>

        <div className="previewEventOption">
          <Link to={"/event/preview"} target="_blank">
            <p onClick={handlePreviewEventClick}>Preview Event</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewEvent;
