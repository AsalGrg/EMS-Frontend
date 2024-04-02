import React, { useEffect, useState } from "react";
import "./VendorSnippets.css";
import { Avatar, Button, Card, Image, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconUserCheck } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { followVendorState, unfollowVendorState, updateEntireVendorList } from "./VendorSnippetsSlice";
import follow_vendor from "../../services/user/follow_vendor";
import unfollow_vendor from "../../services/user/unfollow_vendor";

const VendorSnippets = ({ vendors }) => {
  const vendorsList= useSelector(state=> state.vendors);
  const dispatch = useDispatch()

  console.log("From VendorSnippets")
  console.log(vendors)

  console.log(vendorsList)
  useEffect(() => {
    console.log("here")
    dispatch(
      updateEntireVendorList(vendors)
    )
  }, [])
  

  async function followVendor(vendorId){

    const res= await follow_vendor(vendorId)
    if(res.ok){
      dispatch(followVendorState(vendorId))
    }
  }
  async function unFollowVendor(vendorId){
    
    const res= await unfollow_vendor(vendorId)
    if(res.ok){
      dispatch(unfollowVendorState(vendorId))
    }
  }

  return (
    <div className="">
      <Carousel
        withIndicators
        height={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideSize={{ base: "50%", sm: "33%", md: "20%" }}
        slideGap={{ base: "md", sm: "md" }}
        loop
        align="start"
      >
        {vendorsList.vendors.map((each) => (
          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder
            >
              <div className="mb-3">
                <Card.Section className="d-flex justify-content-center" mt="sm">
                  <Avatar src={each.vendorProfile} alt="it's me" size="lg" />
                </Card.Section>

                <Text fw={600} mt="md" className="text-center">
                  {each.vendorName}
                </Text>

                <Text fw={400} c="dimmed" className="text-center">
                  {each.vendorFollowers} followers
                </Text>
              </div>

              {!each.hasFollowed ? (
                <Button
                  variant="filled"
                  size="sm"
                  radius={"lg"}
                  onClick={() => followVendor(each.vendorId)}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  onClick={() => unFollowVendor(each.vendorId)}
                  variant="light"
                  size="sm"
                  radius={"lg"}
                  color="gray"
                  leftSection={<IconUserCheck size={20} className="fw-bold" />}
                >
                  Following
                </Button>
              )}
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default VendorSnippets;
