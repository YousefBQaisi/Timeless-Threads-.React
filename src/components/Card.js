import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

const data = {
  data: [
    {
      image: 'https://i.imgur.com/ZL52Q2D.png',
      item: 'Car',
      price: '$168.00',
      quantity: '1',
    },
  ],
};

export default function Cards() {
  const rows = data.data.map((item) => (
    <tr key={item.item}>
      <td>
        <Group spacing='sm'>
          <Avatar size={100} src={item.image} radius={15} />
          <Text fz='sm' fw={500}>
            {item.item}
          </Text>
        </Group>
      </td>

      <td>
        <Anchor component='button' size='sm'>
          {item.price}
        </Anchor>
      </td>
      <td>
        <Text fz='sm' c='dimmed'>
          {item.quantity}
        </Text>
      </td>
      <td>
        <Group spacing={0} position='right'>
          <ActionIcon>
            <IconPencil size='1rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon color='red'>
            <IconTrash size='1rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea className='card'>
      <h1>😢</h1>
      <Table sx={{ minWidth: 800 }} verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>

            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}