import {
  AppShell,
  Group,
  Stack,
  Text,
  Image,
  Center,
  Title,
  Transition,
  Divider,
  Container,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { ProjectsDisplay, BioDisplay } from "../ProjectDisplay/ProjectsDisplay";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/BlackDovah",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/samuelashraf",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Python",
  "R",
];

export function LandingPage() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowFooter(scrollY + viewportHeight >= documentHeight - 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppShell header={{ height: 150 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header bg="#0035ad" c="#fdb766">
        <Center>
          <button type="button">
            <Title className="text-4xl max-lg:text-3xl max-md:text-2xl">
              Samuel Ashraf's Portfolio
            </Title>
          </button>
        </Center>
        <Group className="justify-center h-full px-5 text-3xl max-lg:text-2xl max-md:text-xl">
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Stack className="flex text-[#0035ad] w-full items-center justify-center">
          <Image
            src="/images/Photograph.JPG"
            radius="md"
            h="200"
            fit="contain"
            className="flex w-[15%] max-lg:w-[20%] max-md:w-[25%] max-sm:w-[30%] mt-8 mb-8"
          />
          <Title className="text-4xl max-lg:text-3xl max-md:text-2xl mt-8 mb-2">
            Description
          </Title>
          <Text className="w-1/2 text-lg max-lg:text-base max-md:text-sm">
            I'm a self taught programmer, who has started by delving into python
            and R to learn Data Sciences and Bioinformatics, but have ever since
            shifted towards FullStack development using tools like React and
            TailwindCSS, although I still love Bioinformatics
          </Text>
          <Title className="text-4xl max-lg:text-3xl max-md:text-2xl mt-8 mb-2">
            Skills
          </Title>
          <Container>
            <SimpleGrid cols={{ base: 2, sm: 4 }}>
              {skills.map((skill) => (
                <Box
                  key={skill}
                  className="flex justify-center border-4 rounded-xl 
                  border-blue-500 text-lg max-lg:text-base max-md:text-sm p-2"
                >
                  {skill}
                </Box>
              ))}
            </SimpleGrid>
          </Container>

          <Title className="text-4xl max-lg:text-3xl max-md:text-2xl mt-8 mb-2">
            Web Development Projects
          </Title>
          <ProjectsDisplay />
          <Divider size="md" c="black" w="50%" m="lg" />
          <Title className="text-4xl max-lg:text-3xl max-md:text-2xl mb-2">
            Data Sciences Projects
          </Title>
          <BioDisplay />
        </Stack>
      </AppShell.Main>
      <Transition
        mounted={showFooter}
        transition="slide-up"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <AppShell.Footer style={styles} p="md" bg="#0035ad" c="#fdb766">
            <Center>
              <Text>
                ©2025 Samuel Ashraf's Portfolio | Made with react | tailwindCSS
                | Mantine.
              </Text>
            </Center>
          </AppShell.Footer>
        )}
      </Transition>
    </AppShell>
  );
}
