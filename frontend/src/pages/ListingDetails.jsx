import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ListingDetails() {
  const { Lsid } = useParams();
  const [listingDetails, setListingDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/listings_with_details");
        if (response.ok) {
          const result = await response.json();

          // Find the listingDetails for the specific Lsid
          const detailsForLsid = result.listings_with_details.find(
            (listing) => String(listing[0]) === Lsid
          );

          if (detailsForLsid) {
            setListingDetails(detailsForLsid);
          } else {
            throw new Error(`Listing details not found for Lsid: ${Lsid}`);
          }
        } else {
          throw new Error("Data fetch failed");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [Lsid]);

  return (
    <div>
      {listingDetails ? (
        <div>
          <h2>{listingDetails[7]}</h2>
          {listingDetails[1] && <p>Date: {listingDetails[1]}</p>}
          {listingDetails[2] && <p>Days Since Published: {listingDetails[2]}</p>}
          {listingDetails[3] && <p>Price: {listingDetails[3]}</p>}
          {listingDetails[4] && <p>Price per Area: {listingDetails[4]}</p>}
          {listingDetails[5] && <p>From Who: {listingDetails[5]}</p>}
          {listingDetails[6] && <p>Land Title Status: {listingDetails[6]}</p>}
          {listingDetails[8] && <p>Home ID: {listingDetails[8]}</p>}
          {listingDetails[10] && <p>Commercial Property ID: {listingDetails[10]}</p>}
          {listingDetails[11] && <p>Hotel ID: {listingDetails[11]}</p>}
          {listingDetails[12] && <p>Land ID: {listingDetails[12]}</p>}
          {listingDetails[13] && <p>Home ID (2): {listingDetails[13]}</p>}
          {listingDetails[14] && <p>Home Room Number: {listingDetails[14]}</p>}
          {listingDetails[15] && <p>Home City: {listingDetails[15]}</p>}
          {listingDetails[16] && <p>Home Neighborhood: {listingDetails[16]}</p>}
          {listingDetails[17] && <p>Home For Rent: {listingDetails[17]}</p>}
          {listingDetails[18] && <p>Home For Sale: {listingDetails[18]}</p>}
          {listingDetails[19] && <p>Home Area Brut: {listingDetails[19]}</p>}
          {listingDetails[20] && <p>Home Combi Type: {listingDetails[20]}</p>}
          {listingDetails[21] && <p>Home Language: {listingDetails[21]}</p>}
          {listingDetails[22] && <p>Home Longitude: {listingDetails[22]}</p>}
          {listingDetails[23] && <p>Home Latitude: {listingDetails[23]}</p>}
          {listingDetails[24] && <p>Home Area Net: {listingDetails[24]}</p>}
          {listingDetails[25] && <p>Home Age of Building: {listingDetails[25]}</p>}
          {listingDetails[26] && <p>Home Bathroom Number: {listingDetails[26]}</p>}
          {listingDetails[27] && <p>Home Is Inside Site: {listingDetails[27]}</p>}
          {listingDetails[28] && <p>Home Current Use: {listingDetails[28]}</p>}
          {listingDetails[29] && <p>Land ID (2): {listingDetails[29]}</p>}
          {listingDetails[30] && <p>Land Area: {listingDetails[30]}</p>}
          {listingDetails[31] && <p>Land Block: {listingDetails[31]}</p>}
          {listingDetails[32] && <p>Land Parcel: {listingDetails[32]}</p>}
          {listingDetails[33] && <p>Land Zoning Status: {listingDetails[33]}</p>}
          {listingDetails[34] && <p>Hotel ID (2): {listingDetails[34]}</p>}
          {listingDetails[35] && <p>Hotel Name: {listingDetails[35]}</p>}
          {listingDetails[36] && <p>Hotel Location: {listingDetails[36]}</p>}
          {listingDetails[37] && <p>Commercial Property ID (2): {listingDetails[37]}</p>}
          {listingDetails[38] && <p>Commercial Property Floor Number of Listing: {listingDetails[38]}</p>}
          {listingDetails[39] && <p>Commercial Property Total Floor Number: {listingDetails[39]}</p>}
          {listingDetails[40] && <p>Commercial Property Area Net: {listingDetails[40]}</p>}
          {listingDetails[41] && <p>Commercial Property Area Brut: {listingDetails[41]}</p>}
          {listingDetails[42] && <p>Commercial Property Age of Building: {listingDetails[42]}</p>}
          {listingDetails[43] && <p>Commercial Property Room Number: {listingDetails[43]}</p>}
          {listingDetails[44] && <p>Admin ID: {listingDetails[44]}</p>}
          {listingDetails[45] && <p>Admin First Name: {listingDetails[45]}</p>}
          {listingDetails[46] && <p>Admin Last Name: {listingDetails[46]}</p>}
          {/* Continue adding more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ListingDetails;
