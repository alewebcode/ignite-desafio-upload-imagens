import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  console.log(cards);
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [urlImage, setUrlImage] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url): void {
    setUrlImage(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={12}>
        {
          /* TODO CARD GRID */

          cards?.map(card => (
            <Card
              data={card}
              viewImage={() => handleViewImage(card.url)}
              key={card.id}
            />
          ))
        }
      </SimpleGrid>

      {
        /* TODO MODALVIEWIMAGE */
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={urlImage} />
      }
    </>
  );
}
