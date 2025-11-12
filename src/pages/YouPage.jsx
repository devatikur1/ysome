import React, { useContext, useEffect } from "react";
import { UiContext } from "../contexts/Ui/UiContext";
import TopAndProfilePart from "../components/YouPageComponents/TopAndProfilePart";
import { FirebaseContext } from "../contexts/Firebase/FirebaseContext";
import { useLocation, useNavigate } from "react-router-dom";
import BottomAndVideoPart from "../components/YouPageComponents/BottomAndVideoPart";
import { FullPageLoader } from "../components/custom/LoadingComponent";

export default function YouPage() {
  const { HomePageOutletWidth, HomePageHeight, gridCols } = useContext(UiContext);
  const { auth, likes } = useContext(FirebaseContext);
  const { userID, isLogged, userData, setUserData, countData } = auth;
  const { LikeLoding } = likes;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [location, isLogged, navigate]);

  return (
    <div
      style={{
        // width
        maxWidth: `${HomePageOutletWidth}px`,
        minWidth: `${HomePageOutletWidth}px`,
        width: `${HomePageOutletWidth}px`,

        // height
        maxHeight: `${HomePageHeight}px`,
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
      }}
      className=" overflow-x-hidden overflow-y-auto py-8"
    >
      {LikeLoding ? (
        <FullPageLoader />
      ) : (
        <>
          <TopAndProfilePart
            userID={userID}
            setUserData={setUserData}
            userData={userData}
            countData={countData}
          />
          <BottomAndVideoPart countData={countData} gridCols={gridCols} />
        </>
      )}
    </div>
  );
}
