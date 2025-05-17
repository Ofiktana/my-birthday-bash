import WishPopOut from "./WishPopOut";
import { Flex, Tabs } from "@chakra-ui/react";

function WishesTabs() {
  const wishes = [
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Frank",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Dolabunmi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Nifemi",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
    {
      name: "Audrey Ayodele",
      message: "Happy Birthday Jasper. So sorry I won't be there",
      isAttending: false,
      isLiked: true,
    },
    {
      name: "Frank",
      message: "Happy Birthday Jasper",
      isAttending: true,
      isLiked: false,
    },
  ];

  return (
    <Tabs.Root flexGrow={1} defaultValue="all">
      <Tabs.List>
        <Tabs.Trigger value="all">All Wishes</Tabs.Trigger>
        <Tabs.Trigger value="liked">Liked</Tabs.Trigger>
        <Tabs.Trigger value="attendees">Attendees</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="all" h={'full'}>
        <Flex
          wrap={"wrap"}
          overflowY={"scroll"}
          p={2}
          gapX={2}
          gapY={2}
          justify={"start"}
          align={'start'}
          h={"calc(100% - 50px)"}
          maxH={{base: '60vh', md: '33vh', xl: '60vh'}}
          // border={'2px solid green'}
        >
          {wishes.map((wish) => (
            <WishPopOut {...wish} />
          ))}
        </Flex>
      </Tabs.Content>
      <Tabs.Content value="liked">
        <Flex
          wrap={"wrap"}
          overflowY={"scroll"}
          p={2}
          gapX={2}
          gapY={2}
          justify={"start"}
          align={'start'}
          h={"calc(100% - 50px)"}
          maxH={{base: '60vh', md: '33vh', xl: '60vh'}}
          // border={'2px solid green'}
        >
          {wishes
            .filter((wish) => wish.isLiked)
            .map((wish) => (
              <WishPopOut {...wish} />
            ))}
        </Flex>
      </Tabs.Content>
      <Tabs.Content value="attendees" h={"full"}>
        <Flex
          wrap={"wrap"}
          overflowY={"scroll"}
          p={2}
          gapX={2}
          gapY={2}
          justify={"start"}
          align={'start'}
          h={"calc(100% - 50px)"}
          maxH={{base: '60vh', md: '33vh', xl: '60vh'}}
          // border={'2px solid green'}
        >
          {wishes
            .filter((wish) => wish.isAttending)
            .map((wish) => (
              <WishPopOut {...wish} />
            ))}
        </Flex>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default WishesTabs;
