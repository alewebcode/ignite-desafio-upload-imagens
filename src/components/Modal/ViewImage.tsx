import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900" maxH="600">
        <ModalBody p={0} />
        <Image src={imgUrl} alt="" objectFit="cover" w="100%" h="100%" />
        <ModalFooter bg="pGray.800">
          <Link
            href={imgUrl}
            target="_blank"
            justifyContent="flex-start"
            width="100%"
            border="none"
            _focus={{ boxShadow: 'none' }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
