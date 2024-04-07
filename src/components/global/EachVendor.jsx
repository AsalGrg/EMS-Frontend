import { Button, Card, Text } from '@mantine/core'
import React from 'react'

const EachVendor = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
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
  )
}

export default EachVendor