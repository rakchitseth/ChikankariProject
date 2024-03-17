"use client"
import { use, useEffect, useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Container,
  Title,
  Button,
  Drawer,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './TableSort.module.css';
import { useDisclosure } from '@mantine/hooks';


function Th({ children, reversed, sorted, onSort }) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data, search) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data,
  payload
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

function ManageProduct() {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const [productList, setProductList] = useState([]);
  const [masterList, setMasterList] = useState([]);


  const [detailsOpen, toggleDetails] = useDisclosure(false);


  const fetchProducts = () => {
    if (window !== undefined) {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getall`)
        .then((result) => result.json())
        .then(data => {
          console.log(data);
          setProductList(data);
          setSortedData(data);
          setMasterList(data);
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(productList, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const deleteproduct = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/delete` + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchProducts();
      enqueueSnackbar('User Delete', { variant: 'success' });
    }
  }

  const rows = productList.map((product) => (
    <Table.Tr key={product._id}>
      <Table.Td>{product.title}</Table.Td>
      <Table.Td>{product.material}</Table.Td>
      <Table.Td>{product.embroidery}</Table.Td>
      <Table.Td>{product.embroidery}</Table.Td>
      <Table.Td>
        <Button color='red' variant='filled' onClick={() => { deleteproduct(product._id) }} className='btn btn-danger'>Delete</Button>
      </Table.Td>
    </Table.Tr>
  ));


  return (
    <div>
      <Drawer opened={detailsOpen} onClose={toggleDetails.close} title="Product Details">
        {/* Drawer content */}
      </Drawer>
      <Container size="lg">

        <header>
          <Title order={1} align="center" my={20}>Manage Product</Title>
        </header>

        <ScrollArea>
          <TextInput
            placeholder="Search by any field"
            mb="md"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            value={search}
            onChange={handleSearchChange}
          />
          <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
            <Table.Tbody>
              <Table.Tr>
                <Th
                  sorted={sortBy === 'title'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('title')}
                >
                  Title
                </Th>
                <Th
                  sorted={sortBy === 'material'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('material')}
                >
                  Material
                </Th>
                <Th
                  sorted={sortBy === 'embroidery'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('embroidery')}
                >
                  Embroidery
                </Th>
                <Th
                  sorted={sortBy === 'gender'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('gender')}
                >
                  Gender
                </Th>
                <Th>
                  Actions
                </Th>
              </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
              {rows.length > 0 && productList.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td
                  // colSpan={Object.keys(productList[0]).length}
                  >
                    <Text fw={500} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Container>
    </div>
  );
}

export default ManageProduct;