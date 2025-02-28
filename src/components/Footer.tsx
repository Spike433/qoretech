import { Flex, Text } from "@/once-ui/components";
import styles from "./Footer.module.scss";
import { title, description } from "@/app/resources/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{title}</Text>                    
        </Text>        
        <Flex gap="16">
        <Text variant="body-default-s">mateo@qoretech.eu</Text>                    
        </Flex>

      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
