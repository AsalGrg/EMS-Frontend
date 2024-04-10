import {
  Avatar,
  Button,
  Input,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconTrash,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import get_edit_profile_details from "../../../services/user/get_edit_profile_details";
import save_edit_profile_details from "../../../services/user/save_edit_profile_details";

const EditBasicDetails = () => {
  const [profilePic, setprofilePic] = useState("");
  const [username, setusername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userBio, setUserBio] = useState("");
  const [facebookLink, setfacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [linkedIn, setLinkedInLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  useEffect(() => {
    async function loadEditProfileDetails() {
      const res = await get_edit_profile_details();
      if (res.ok) {
        const data = await res.json();
        setprofilePic(data.profileDp);
        setusername(data.username);
        setAddress(data.address);
        setEmail(data.email);
        setUserBio(data.userBio);
        setphoneNumber(data.phoneNumber);
        setfacebookLink(data.facebookLink);
        setInstagramLink(data.instagramLink);
        setLinkedInLink(data.linkedInLink);
        setTwitterLink(data.twitterLink);
      }
    }

    loadEditProfileDetails();
  }, []);


  const inputRef= useRef();
  
  const handleChangeProfileClick=()=>{

    inputRef.current.click();
  }

  function changeProfilePic(e){

    console.log("Changed")
    setprofilePic(e.target.files[0]);
    
  }

  async function handleSubmitEditDetails(){

    const data= {
        profileDp: typeof profilePic==='string'? profilePic: null,
        username: username,
        address: address,
        email: email,
        userBio: userBio,
        phoneNumber: phoneNumber,
        facebookLink: facebookLink,
        instagramLink: instagramLink,
        linkedInLink: linkedIn,
        twitterLink: twitterLink
    }

    console.log(data)
    const res = await save_edit_profile_details(profilePic, data);

    if(res.ok){
        console.log("DONNNEEE");
    }else{
        console.log("Chiii")
    }
  }

  function handleDeleteProfilePic(){
    setprofilePic(null);
  }

  const profileSrc =
    profilePic instanceof File ? URL.createObjectURL(profilePic) : profilePic;

  return (
    <div>
      <div className="container py-5 w-75">
        <Title order={2} fw={500} className="">
          Basic Details
        </Title>

        <div className="mt-4">
          <Title order={5} fw={700} className="">
            Profile Picture
          </Title>

          <div className="d-flex align-items-center gap-4 mt-3">
            <Avatar size={"90px"} src={profileSrc}></Avatar>

            {profilePic != null ? (
              <div>
                <div className="d-flex flex-column gap-2">
                  <Button color="blue" variant={"light"} size="xs"
                  onClick={handleChangeProfileClick}
                  >
                    Change profile
                  </Button>
                  <Button
                    color="dark"
                    variant={"outline"}
                    size="xs"
                    leftSection={
                      <IconTrash
                        style={{ height: rem(18), width: rem(18) }}
                        color="red"
                      />
                    }

                    onClick={handleDeleteProfilePic}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Button color="blue" variant={"light"} size="xs"
                onClick={handleChangeProfileClick}
                >
                  Add profile
                </Button>
              </div>
            )}


            <input
            type="file"
            className="visually-hidden"
            ref={inputRef}
            onChange={changeProfilePic}
            ></input>
          </div>

          <div className="mt-4 row gap-2">
            <TextInput
              label="Username"
              className="col-5"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <TextInput
              label="Email"
              disabled
              className="col-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="Phone number"
              className="col-5"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <TextInput
              label="Address"
              className="col-5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Textarea
              minRows={3}
              autosize
              label="User bio"
              className="col-10"
              value={userBio}
              onChange={(e) => setUserBio(e.target.value)}
            />
          </div>

          <div className="mt-4 gap-2 row">
            <Title order={5} fw={700} className="">
              Socials
            </Title>
            <TextInput
              label="Instagram"
              leftSection={<IconBrandInstagram />}
              className="col-5"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
            />
            <TextInput
              label="Facebook"
              leftSection={<IconBrandFacebook />}
              className="col-5"
              value={facebookLink}
              onChange={(e) => setfacebookLink(e.target.value)}
            />
            <TextInput
              label="LinkedIn"
              leftSection={<IconBrandLinkedin />}
              value={linkedIn}
              onChange={(e) => setLinkedInLink(e.target.value)}
              className="col-5"
            />
            <TextInput
              label="Twitter"
              leftSection={<IconBrandTwitter />}
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
              className="col-5"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-5">
          <Button color="blue" size="xs" radius={"lg"}
          onClick={handleSubmitEditDetails}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditBasicDetails;
