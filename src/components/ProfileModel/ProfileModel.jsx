import { Modal, useMantineTheme } from "@mantine/core";
import "./profilemodel.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/userAction";

const ProfileModel = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formdata, setFormdata] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  // const { user } = useSelector((state) => state.authreducer.authData);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      // (e.target.name === "profileImage")
      setProfileImage(img);
      // : setCoverImage[img];
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = formdata;
    console.log(userData);
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      userData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      userData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, userData));
    setModalOpened(false);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoinput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formdata.firstname}
          />
          <input
            type="text"
            className="infoinput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formdata.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoinput"
            name="worksAt"
            placeholder="Works At"
            onChange={handleChange}
            value={formdata.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoinput"
            name="livesin"
            placeholder="Lives In"
            onChange={handleChange}
            value={formdata.livesin}
          />
          <input
            type="text"
            className="infoinput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formdata.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
            name="relationship"
            onChange={handleChange}
            value={formdata.relationship}
          />
        </div>
        <div>
          <span>Profile Image</span>
          <input type="file" name="profileImage" onChange={onImageChange} />
          <span>Cover Image</span>
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button info-button" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
};
export default ProfileModel;
