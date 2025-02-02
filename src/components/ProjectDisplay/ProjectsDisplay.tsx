import { Carousel } from "@mantine/carousel";
import { Text, Title, useMantineTheme, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Project } from "@/types";
import { projects } from "@/assets/projects";
import { bioProjects } from "@/assets/bioProjects";

function Card({ title, link, githubLink, description, image }: Project) {
  return (
    <Stack className="items-center justify-center">
      <Title className="text-[#0035ad] text-4xl max-lg:text-3xl max-md:text-2xl mt-8 mb-2">
        {title}
      </Title>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <Image src={`${image}`} alt={title} />
      </a>
      <strong className="text-[#0035ad]">
        Link to the functional app (replaced with the github link if none
        available) :
      </strong>
      <a
        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <Text className="text-[#0035ad] text-lg max-lg:text-base max-md:text-sm">
        {description}
      </Text>
    </Stack>
  );
}

export function ProjectsDisplay() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const slides = Object.values(projects).map((items) =>
    [items].map((item) => (
      <Carousel.Slide key={item.title}>
        <Card {...item} />
      </Carousel.Slide>
    ))
  );

  return (
    <Carousel
      h="100%"
      slideSize={{ base: "100%", md: "40%", height: "500" }}
      slideGap={{ base: 2, sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      withIndicators
      loop
      controlSize={40}
      mt={50}
    >
      {slides}
    </Carousel>
  );
}

export function BioDisplay() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const slides = Object.values(bioProjects).map((items) =>
    [items].map((item) => (
      <Carousel.Slide key={item.title}>
        <Card {...item} />
      </Carousel.Slide>
    ))
  );

  return (
    <Carousel
      h="100%"
      slideSize={{ base: "100%", md: "40%", height: "500" }}
      slideGap={{ base: 2, sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      withIndicators
      loop
      controlSize={40}
    >
      {slides}
    </Carousel>
  );
}
