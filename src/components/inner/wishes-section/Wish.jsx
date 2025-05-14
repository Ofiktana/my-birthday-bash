import { Accordion, Avatar, Badge, HStack } from "@chakra-ui/react"
import { LuTrophy } from "react-icons/lu"

const items = [
  {
    name: "Alex",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Benji",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Charlie",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
  {
    name: "Dennis",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Enna",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Frank",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
  {
    name: "Gotah",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Henry",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Ima",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
  {
    name: "John",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Kelly",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Larry",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
  {
    name: "Alex",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Benji",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Charlie",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
  {
    name: "Alex",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Benji",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Charlie",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error earum quas, dolorum minima est ad, id ipsam veritatis qui aspernatur quis cupiditate totam molestiae voluptates at rem repellat unde.',
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
]

function Wish() {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.name}>
          <Accordion.ItemTrigger>
            {/* <Avatar.Root shape="rounded">
              <Avatar.Image src={item.image} />
              <Avatar.Fallback name={item.name} />
            </Avatar.Root> */}
            <HStack flex="1">
              {item.name}{" "}
              {item.topRated && (
                <Badge colorPalette="green">
                  <LuTrophy />
                  Top Rated
                </Badge>
              )}
            </HStack>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.bio}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Wish

