import ProfileImage from "../assets/images/image-avatar.webp";

const Profile = () => {
  return (
    <div className="d-flex col pt-2">
      <img
        src={ProfileImage}
        alt="alt"
        style={{ width: "30px", height: "30px" }}
      />
      <div className="px-3 pt-1">
        <strong>Greg Hooper</strong>
      </div>
    </div>
  );
};

export default Profile;
