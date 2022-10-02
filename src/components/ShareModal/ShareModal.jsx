import { Modal, useMantineTheme } from "@mantine/core";
import AddPost from "../AddPost/AddPost";

const ShareModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

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
      <AddPost />
    </Modal>
  );
};
export default ShareModal;
